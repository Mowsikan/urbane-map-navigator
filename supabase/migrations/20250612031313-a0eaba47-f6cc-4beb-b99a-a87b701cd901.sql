
-- Create enum types for better data consistency
CREATE TYPE business_category AS ENUM (
  'Wedding Services',
  'Home Services', 
  'Healthcare',
  'Education',
  'Food & Catering',
  'Shopping',
  'Professional Services',
  'Tourism',
  'Automotive',
  'Beauty & Wellness'
);

CREATE TYPE user_type AS ENUM (
  'customer',
  'business_owner',
  'service_provider',
  'tourist'
);

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone TEXT,
  user_type user_type NOT NULL DEFAULT 'customer',
  area TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create businesses table
CREATE TABLE public.businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category business_category NOT NULL,
  description TEXT,
  speciality TEXT,
  phone TEXT,
  email TEXT,
  address TEXT,
  area TEXT NOT NULL,
  working_hours TEXT DEFAULT 'Mon-Sat: 9:00 AM - 6:00 PM',
  price_range TEXT,
  image_url TEXT,
  verified BOOLEAN DEFAULT FALSE,
  experience TEXT,
  response_time TEXT DEFAULT '2-4 hours',
  rating DECIMAL(2,1) DEFAULT 0.0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create business services table
CREATE TABLE public.business_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
  service_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create business gallery table
CREATE TABLE public.business_gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact requests table
CREATE TABLE public.contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES public.businesses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  message TEXT,
  contact_method TEXT DEFAULT 'platform',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for businesses (public read, owner write)
CREATE POLICY "Anyone can view businesses" ON public.businesses
  FOR SELECT USING (true);

CREATE POLICY "Business owners can manage their businesses" ON public.businesses
  FOR ALL USING (auth.uid() = owner_id);

-- RLS Policies for business services
CREATE POLICY "Anyone can view business services" ON public.business_services
  FOR SELECT USING (true);

CREATE POLICY "Business owners can manage their services" ON public.business_services
  FOR ALL USING (
    auth.uid() IN (
      SELECT owner_id FROM public.businesses WHERE id = business_id
    )
  );

-- RLS Policies for business gallery
CREATE POLICY "Anyone can view business gallery" ON public.business_gallery
  FOR SELECT USING (true);

CREATE POLICY "Business owners can manage their gallery" ON public.business_gallery
  FOR ALL USING (
    auth.uid() IN (
      SELECT owner_id FROM public.businesses WHERE id = business_id
    )
  );

-- RLS Policies for reviews
CREATE POLICY "Anyone can view reviews" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can create reviews" ON public.reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" ON public.reviews
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for contact requests
CREATE POLICY "Users can view their own contact requests" ON public.contact_requests
  FOR SELECT USING (
    auth.uid() = user_id OR 
    auth.uid() IN (
      SELECT owner_id FROM public.businesses WHERE id = business_id
    )
  );

CREATE POLICY "Users can create contact requests" ON public.contact_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create trigger to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, user_type, area)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
    COALESCE((NEW.raw_user_meta_data->>'user_type')::user_type, 'customer'),
    NEW.raw_user_meta_data->>'area'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
