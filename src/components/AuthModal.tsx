
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'signup';
}

const AuthModal = ({ isOpen, onClose, defaultMode = 'login' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userType, setUserType] = useState('customer');
  const [area, setArea] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signUp, signIn } = useAuth();
  const { toast } = useToast();

  const areas = [
    'Meenakshi Temple Area', 'Anna Nagar', 'SS Colony', 'KK Nagar', 
    'Tallakulam', 'Thirunagar', 'Vilangudi', 'Pasumalai', 'Mattuthavani',
    'Teppakulam', 'Alagar Kovil Road'
  ];

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setUserType('customer');
    setArea('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (mode === 'signup') {
        const { error } = await signUp(email, password, {
          full_name: fullName,
          user_type: userType,
          area: area
        });
        
        if (error) {
          console.error('Signup error:', error);
          toast({
            title: "Signup Error",
            description: error.message || "Failed to create account. Please try again.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Account Created!",
            description: "Welcome to Madurai Hub! You can now list your business."
          });
          resetForm();
          onClose();
        }
      } else {
        const { error } = await signIn(email, password);
        
        if (error) {
          console.error('Login error:', error);
          toast({
            title: "Login Error",
            description: error.message || "Invalid credentials. Please try again.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Welcome back!",
            description: "You have successfully logged in."
          });
          resetForm();
          onClose();
        }
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === 'login' ? 'Login to Madurai Hub' : 'Join Madurai Hub'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="userType">I am a</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer">Customer</SelectItem>
                    <SelectItem value="business_owner">Business Owner</SelectItem>
                    <SelectItem value="service_provider">Service Provider</SelectItem>
                    <SelectItem value="tourist">Tourist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="area">Area (Optional)</Label>
                <Select value={area} onValueChange={setArea}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((areaName) => (
                      <SelectItem key={areaName} value={areaName}>{areaName}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Please wait..." : (mode === 'login' ? 'Login' : 'Create Account')}
          </Button>
          
          <div className="text-center">
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-sm text-primary hover:underline"
            >
              {mode === 'login' 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Login"
              }
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
