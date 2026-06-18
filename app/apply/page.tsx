"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, ChevronLeft, ChevronRight, User, BookOpen, FileText, Send } from "lucide-react"

const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  cnic: z.string().min(13, "Please enter a valid CNIC number"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Please select your gender"),
  address: z.string().min(10, "Please enter your complete address"),
  city: z.string().min(2, "City is required"),
  
  // Academic Information
  program: z.string().min(1, "Please select a program"),
  qualification: z.string().min(1, "Please select your qualification"),
  institute: z.string().min(2, "Institute name is required"),
  passingYear: z.string().min(1, "Passing year is required"),
  percentage: z.string().min(1, "Percentage/GPA is required"),
  
  // Additional Information
  howDidYouHear: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Academic Info", icon: BookOpen },
  { id: 3, title: "Documents", icon: FileText },
  { id: 4, title: "Review", icon: Send },
]

const programs = [
  { value: "bs-nursing", label: "BS Nursing (BSN) - 4 Years" },
  { value: "post-rn-bsn", label: "Post RN BSN - 2 Years" },
  { value: "cna", label: "Certified Nursing Assistant - 6 Months" },
  { value: "lhv", label: "Lady Health Visitor - 2 Years" },
  { value: "cmw", label: "Community Midwifery - 18 Months" },
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  const watchedValues = watch()

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = []
    
    if (currentStep === 1) {
      fieldsToValidate = ["firstName", "lastName", "email", "phone", "cnic", "dateOfBirth", "gender", "address", "city"]
    } else if (currentStep === 2) {
      fieldsToValidate = ["program", "qualification", "institute", "passingYear", "percentage"]
    } else if (currentStep === 3) {
      fieldsToValidate = ["howDidYouHear"]
    }

    const isValid = await trigger(fieldsToValidate)
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-muted/50 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-12 text-center max-w-lg mx-4 border border-border shadow-xl"
          >
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Application Submitted!
            </h1>
            <p className="text-muted-foreground mb-6">
              Thank you for applying to MIKINHS. We have received your application and will contact you within 3-5 business days regarding the next steps.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Application Reference: <span className="font-mono font-semibold text-primary">MIKI-2026-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
            </p>
            <Button asChild size="lg" className="w-full">
              <a href="/">Return to Homepage</a>
            </Button>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Apply for Admission
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Take the first step towards your nursing career. Complete the application form below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-8 bg-muted border-b">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex justify-center">
              <div className="flex items-center gap-2 md:gap-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex items-center">
                      <div 
                        className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          currentStep >= step.id 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted-foreground/20 text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <step.icon className="h-5 w-5" />
                        )}
                      </div>
                      <span className={`hidden md:block ml-2 text-sm font-medium ${
                        currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 md:w-16 h-0.5 mx-2 ${
                        currentStep > step.id ? "bg-primary" : "bg-muted-foreground/20"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-lg">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                        Personal Information
                      </h2>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input 
                              id="firstName" 
                              {...register("firstName")}
                              className={errors.firstName ? "border-destructive" : ""}
                            />
                            {errors.firstName && (
                              <p className="text-destructive text-sm">{errors.firstName.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input 
                              id="lastName" 
                              {...register("lastName")}
                              className={errors.lastName ? "border-destructive" : ""}
                            />
                            {errors.lastName && (
                              <p className="text-destructive text-sm">{errors.lastName.message}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input 
                              id="email" 
                              type="email"
                              {...register("email")}
                              className={errors.email ? "border-destructive" : ""}
                            />
                            {errors.email && (
                              <p className="text-destructive text-sm">{errors.email.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input 
                              id="phone" 
                              type="tel"
                              placeholder="+92-300-1234567"
                              {...register("phone")}
                              className={errors.phone ? "border-destructive" : ""}
                            />
                            {errors.phone && (
                              <p className="text-destructive text-sm">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cnic">CNIC Number *</Label>
                            <Input 
                              id="cnic" 
                              placeholder="12345-1234567-1"
                              {...register("cnic")}
                              className={errors.cnic ? "border-destructive" : ""}
                            />
                            {errors.cnic && (
                              <p className="text-destructive text-sm">{errors.cnic.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                            <Input 
                              id="dateOfBirth" 
                              type="date"
                              {...register("dateOfBirth")}
                              className={errors.dateOfBirth ? "border-destructive" : ""}
                            />
                            {errors.dateOfBirth && (
                              <p className="text-destructive text-sm">{errors.dateOfBirth.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender *</Label>
                          <Select onValueChange={(value) => setValue("gender", value)}>
                            <SelectTrigger className={errors.gender ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.gender && (
                            <p className="text-destructive text-sm">{errors.gender.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Complete Address *</Label>
                          <Textarea 
                            id="address" 
                            rows={3}
                            {...register("address")}
                            className={errors.address ? "border-destructive" : ""}
                          />
                          {errors.address && (
                            <p className="text-destructive text-sm">{errors.address.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input 
                            id="city" 
                            {...register("city")}
                            className={errors.city ? "border-destructive" : ""}
                          />
                          {errors.city && (
                            <p className="text-destructive text-sm">{errors.city.message}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Academic Information */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                        Academic Information
                      </h2>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="program">Program Applying For *</Label>
                          <Select onValueChange={(value) => setValue("program", value)}>
                            <SelectTrigger className={errors.program ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              {programs.map((program) => (
                                <SelectItem key={program.value} value={program.value}>
                                  {program.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.program && (
                            <p className="text-destructive text-sm">{errors.program.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="qualification">Highest Qualification *</Label>
                          <Select onValueChange={(value) => setValue("qualification", value)}>
                            <SelectTrigger className={errors.qualification ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select qualification" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="matric">Matric / SSC</SelectItem>
                              <SelectItem value="inter">Intermediate / FSc</SelectItem>
                              <SelectItem value="diploma">Diploma in Nursing</SelectItem>
                              <SelectItem value="bachelors">Bachelors Degree</SelectItem>
                              <SelectItem value="masters">Masters Degree</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.qualification && (
                            <p className="text-destructive text-sm">{errors.qualification.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="institute">Institute/School/College Name *</Label>
                          <Input 
                            id="institute" 
                            {...register("institute")}
                            className={errors.institute ? "border-destructive" : ""}
                          />
                          {errors.institute && (
                            <p className="text-destructive text-sm">{errors.institute.message}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="passingYear">Passing Year *</Label>
                            <Select onValueChange={(value) => setValue("passingYear", value)}>
                              <SelectTrigger className={errors.passingYear ? "border-destructive" : ""}>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 10 }, (_, i) => 2026 - i).map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.passingYear && (
                              <p className="text-destructive text-sm">{errors.passingYear.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="percentage">Percentage / CGPA *</Label>
                            <Input 
                              id="percentage" 
                              placeholder="e.g., 75% or 3.5"
                              {...register("percentage")}
                              className={errors.percentage ? "border-destructive" : ""}
                            />
                            {errors.percentage && (
                              <p className="text-destructive text-sm">{errors.percentage.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Information */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                        Additional Information
                      </h2>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="howDidYouHear">How did you hear about MIKINHS? *</Label>
                          <Select onValueChange={(value) => setValue("howDidYouHear", value)}>
                            <SelectTrigger className={errors.howDidYouHear ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="social-media">Social Media</SelectItem>
                              <SelectItem value="website">Website</SelectItem>
                              <SelectItem value="friend-family">Friend / Family</SelectItem>
                              <SelectItem value="newspaper">Newspaper</SelectItem>
                              <SelectItem value="education-fair">Education Fair</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.howDidYouHear && (
                            <p className="text-destructive text-sm">{errors.howDidYouHear.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Any additional message or questions (Optional)</Label>
                          <Textarea 
                            id="message" 
                            rows={4}
                            placeholder="Tell us anything else you would like us to know..."
                            {...register("message")}
                          />
                        </div>

                        <div className="bg-muted rounded-xl p-6">
                          <h3 className="font-semibold text-foreground mb-3">Required Documents</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Please bring the following documents during your interview:
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            <li>- Original and copy of Matric/SSC certificate</li>
                            <li>- Original and copy of Intermediate/FSc certificate</li>
                            <li>- Original and copy of CNIC (self and parents)</li>
                            <li>- 4 recent passport-size photographs</li>
                            <li>- Domicile certificate</li>
                            <li>- Character certificate from last institution</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                        Review Your Application
                      </h2>
                      <div className="space-y-6">
                        <div className="bg-muted rounded-xl p-6">
                          <h3 className="font-semibold text-foreground mb-4">Personal Information</h3>
                          <dl className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <dt className="text-muted-foreground">Name</dt>
                              <dd className="font-medium">{watchedValues.firstName} {watchedValues.lastName}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Email</dt>
                              <dd className="font-medium">{watchedValues.email}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Phone</dt>
                              <dd className="font-medium">{watchedValues.phone}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">CNIC</dt>
                              <dd className="font-medium">{watchedValues.cnic}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Gender</dt>
                              <dd className="font-medium capitalize">{watchedValues.gender}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">City</dt>
                              <dd className="font-medium">{watchedValues.city}</dd>
                            </div>
                          </dl>
                        </div>

                        <div className="bg-muted rounded-xl p-6">
                          <h3 className="font-semibold text-foreground mb-4">Academic Information</h3>
                          <dl className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <dt className="text-muted-foreground">Program</dt>
                              <dd className="font-medium">{programs.find(p => p.value === watchedValues.program)?.label}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Qualification</dt>
                              <dd className="font-medium capitalize">{watchedValues.qualification}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Institute</dt>
                              <dd className="font-medium">{watchedValues.institute}</dd>
                            </div>
                            <div>
                              <dt className="text-muted-foreground">Percentage</dt>
                              <dd className="font-medium">{watchedValues.percentage}</dd>
                            </div>
                          </dl>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <input type="checkbox" id="terms" className="mt-1" required />
                          <label htmlFor="terms" className="text-sm text-muted-foreground">
                            I hereby declare that all the information provided above is true and correct to the best of my knowledge. 
                            I understand that any false information may result in the cancellation of my admission.
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    
                    {currentStep < 4 ? (
                      <Button type="button" onClick={nextStep}>
                        Next Step
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-primary hover:bg-primary/90">
                        Submit Application
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
