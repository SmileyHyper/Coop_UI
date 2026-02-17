import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import SignatureCanvas from 'react-signature-canvas';
import { toast } from 'sonner';
import { CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Badge } from '../components/ui/badge';

type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  membershipType: string;
  occupation: string;
  employer: string;
  monthlyIncome: string;
  idType: string;
  idNumber: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
};

export function MembershipApply() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>();
  const signatureRef = useRef<SignatureCanvas>(null);
  const [signatureData, setSignatureData] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const membershipType = watch('membershipType');

  const clearSignature = () => {
    signatureRef.current?.clear();
    setSignatureData('');
  };

  const saveSignature = () => {
    if (signatureRef.current) {
      const data = signatureRef.current.toDataURL();
      setSignatureData(data);
      toast.success('Signature saved');
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!signatureData) {
      toast.error('Please provide your signature');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Application submitted successfully! We will contact you within 5-7 business days.');
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Application Form</Badge>
            <h1 className="text-4xl font-bold mb-4">Membership Application</h1>
            <p className="text-lg text-blue-100">
              Complete the form below to begin your journey with us. All fields are required unless marked optional.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      {...register('firstName', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.firstName && <span className="text-sm text-destructive">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input 
                      id="middleName" 
                      {...register('middleName')} 
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      {...register('lastName', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.lastName && <span className="text-sm text-destructive">Required</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input 
                      id="dateOfBirth" 
                      type="date" 
                      {...register('dateOfBirth', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.dateOfBirth && <span className="text-sm text-destructive">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="membershipType">Membership Type</Label>
                    <Select onValueChange={(value) => setValue('membershipType', value)}>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">Regular Member ($500)</SelectItem>
                        <SelectItem value="associate">Associate Member ($250)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...register('email', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.email && <span className="text-sm text-destructive">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      {...register('phone', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.phone && <span className="text-sm text-destructive">Required</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Textarea 
                    id="address" 
                    {...register('address', { required: true })} 
                    className="rounded-lg"
                    rows={3}
                  />
                  {errors.address && <span className="text-sm text-destructive">Required</span>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City/Municipality</Label>
                    <Input 
                      id="city" 
                      {...register('city', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.city && <span className="text-sm text-destructive">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input 
                      id="zipCode" 
                      {...register('zipCode', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.zipCode && <span className="text-sm text-destructive">Required</span>}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Employment Information */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Employment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input 
                      id="occupation" 
                      {...register('occupation', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.occupation && <span className="text-sm text-destructive">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer">Employer Name</Label>
                    <Input 
                      id="employer" 
                      {...register('employer', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.employer && <span className="text-sm text-destructive">Required</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyIncome">Monthly Income Range</Label>
                  <Select onValueChange={(value) => setValue('monthlyIncome', value)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-20k">Below $20,000</SelectItem>
                      <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="above-100k">Above $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Identification */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Identification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="idType">ID Type</Label>
                    <Select onValueChange={(value) => setValue('idType', value)}>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select ID type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passport">Passport</SelectItem>
                        <SelectItem value="drivers">Driver's License</SelectItem>
                        <SelectItem value="national">National ID</SelectItem>
                        <SelectItem value="sss">SSS ID</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idNumber">ID Number</Label>
                    <Input 
                      id="idNumber" 
                      {...register('idNumber', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.idNumber && <span className="text-sm text-destructive">Required</span>}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName">Full Name</Label>
                    <Input 
                      id="emergencyName" 
                      {...register('emergencyName', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.emergencyName && <span className="text-sm text-destructive">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Phone Number</Label>
                    <Input 
                      id="emergencyPhone" 
                      type="tel" 
                      {...register('emergencyPhone', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.emergencyPhone && <span className="text-sm text-destructive">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelation">Relationship</Label>
                    <Input 
                      id="emergencyRelation" 
                      {...register('emergencyRelation', { required: true })} 
                      className="rounded-lg"
                    />
                    {errors.emergencyRelation && <span className="text-sm text-destructive">Required</span>}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Signature */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Digital Signature</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Please sign in the box below using your mouse or touchscreen
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-4 bg-muted/20">
                  <SignatureCanvas
                    ref={signatureRef}
                    canvasProps={{
                      className: 'w-full h-40 bg-white rounded cursor-crosshair',
                    }}
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={clearSignature} className="rounded-lg">
                    <X className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                  <Button type="button" variant="secondary" onClick={saveSignature} className="rounded-lg">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Save Signature
                  </Button>
                </div>
                {signatureData && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Signature saved successfully
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
