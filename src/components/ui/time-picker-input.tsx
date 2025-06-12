
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TimePickerInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
}

const TimePickerInput: React.FC<TimePickerInputProps> = ({ label, value, onChange, id }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12"
      />
    </div>
  );
};

export default TimePickerInput;
