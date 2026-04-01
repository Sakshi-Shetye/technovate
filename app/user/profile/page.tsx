// "use client";

// import { useEffect, useState } from "react";
// import { auth, db } from "@/lib/firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";

// export default function ProfilePage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [language, setLanguage] = useState("en");

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!auth.currentUser) return;
//       const docRef = doc(db, "users", auth.currentUser.uid);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setName(data.name || "");
//         setEmail(data.email || auth.currentUser.email || "");
//         setPhone(data.phone || "");
//         setLanguage(data.language || "en");
//       }
//     };
//     fetchData();
//   }, []);

//   const handleUpdate = async () => {
//     if (!auth.currentUser) return;
//     const docRef = doc(db, "users", auth.currentUser.uid);
//     await updateDoc(docRef, { name, phone, language });
//     alert("Profile updated!");
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-neutral-50">
//       {/* Header */}
//       <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-neutral-200">
//         <h1 className="text-lg font-bold text-neutral-900">Profile</h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <div className="max-w-lg mx-auto">
//           {/* Avatar + Name */}
//           <div className="flex flex-col items-center gap-4">
//             <div
//               className="w-32 h-32 bg-center bg-no-repeat bg-cover border-4 border-white rounded-full shadow-md aspect-square"
//               style={{
//                 backgroundImage: "url('/images/profile-avatar.png')", // put an avatar in public/images/
//               }}
//             />
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-neutral-900">{name || "User"}</h2>
//               <p className="text-base text-neutral-500">Member since 2021</p>
//             </div>
//           </div>

//           {/* Personal Details */}
//           <div className="mt-8 space-y-6">
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold text-neutral-900">
//                 Personal Details
//               </h3>
//               <div className="space-y-4">
//                 <label className="flex flex-col">
//                   <span className="mb-1.5 text-sm font-medium text-neutral-700">
//                     Name
//                   </span>
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full px-4 py-3 bg-white rounded-lg form-input border-neutral-300 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
//                   />
//                 </label>
//                 <label className="flex flex-col">
//                   <span className="mb-1.5 text-sm font-medium text-neutral-700">
//                     Email
//                   </span>
//                   <input
//                     type="email"
//                     value={email}
//                     readOnly
//                     className="w-full px-4 py-3 bg-gray-100 rounded-lg form-input border-neutral-300 text-neutral-900"
//                   />
//                 </label>
//                 <label className="flex flex-col">
//                   <span className="mb-1.5 text-sm font-medium text-neutral-700">
//                     Phone
//                   </span>
//                   <input
//                     type="text"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="w-full px-4 py-3 bg-white rounded-lg form-input border-neutral-300 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
//                   />
//                 </label>
//               </div>
//             </div>

//             {/* Preferences */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold text-neutral-900">Preferences</h3>
//               <label className="flex flex-col">
//                 <span className="mb-1.5 text-sm font-medium text-neutral-700">
//                   Language
//                 </span>
//                 <select
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                   className="w-full px-4 py-3 bg-white rounded-lg form-select border-neutral-300 text-neutral-900 focus:border-primary-500 focus:ring-primary-500"
//                 >
//                   <option value="en">English</option>
//                   <option value="hi">हिंदी</option>
//                   <option value="mr">मराठी</option>
//                 </select>
//               </label>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="sticky bottom-0 bg-white p-4 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
//         <div className="max-w-lg mx-auto">
//           <button
//             onClick={handleUpdate}
//             className="flex items-center justify-center w-full px-4 py-3 text-base font-bold text-white transition rounded-lg bg-primary-500 hover:bg-primary-600"
//           >
//             Save Changes
//           </button>
//         </div>
//       </footer>
//     </div>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { ArrowLeft } from "lucide-react";
// import {
//   Card,
//   CardContent,
// } from "@/components/Card";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function ProfilePage() {
//   const router = useRouter();

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-[380px] rounded-2xl shadow-md overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center gap-3 p-4 border-b">
//           <button onClick={() => router.back()} className="p-1">
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <h1 className="text-lg font-medium">Profile</h1>
//         </div>

//         <CardContent className="p-6">
//           {/* Avatar */}
//           <div className="flex flex-col items-center">
//             <Avatar className="w-24 h-24">
//               <AvatarImage src="https://avatars.githubusercontent.com/u/000000?v=4" />
//               <AvatarFallback>EC</AvatarFallback>
//             </Avatar>
//             <h2 className="mt-4 text-xl font-semibold">Ethan Carter</h2>
//             <p className="text-sm text-gray-500">Member since 2021</p>
//           </div>

//           {/* Personal Details */}
//           <div className="mt-6">
//             <h3 className="mb-2 text-sm font-semibold">Personal Details</h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block mb-1 text-sm text-gray-600">Name</label>
//                 <Input defaultValue="Ethan Carter" />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm text-gray-600">Email</label>
//                 <Input defaultValue="ethan.carter@example.com" />
//               </div>
//               <div>
//                 <label className="block mb-1 text-sm text-gray-600">Phone</label>
//                 <Input defaultValue="+1 (555) 123–4567" />
//               </div>
//             </div>
//           </div>

//           {/* Preferences */}
//           <div className="mt-6">
//             <h3 className="mb-2 text-sm font-semibold">Preferences</h3>
//             <div>
//               <label className="block mb-1 text-sm text-gray-600">Language</label>
//               <Select defaultValue="en">
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select language" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="en">English</SelectItem>
//                   <SelectItem value="hi">Hindi</SelectItem>
//                   <SelectItem value="mr">Marathi</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




// // app/user/profile/page.tsx
// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   Camera,
//   Upload,
//   CheckCircle2,
//   TriangleAlert,
// } from "lucide-react";

// // shadcn/ui components
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";

// // ---------------------------
// // Validation schema (Zod)
// // ---------------------------
// // NOTE: We separate the Select value (languageOption) from the free-text field (customLanguage).
// // If "Other" is chosen, customLanguage becomes required.
// const ProfileSchema = z
//   .object({
//     name: z.string().trim().min(2, "Name must be at least 2 characters."),
//     email: z
//       .string()
//       .trim()
//       .email("Enter a valid email.")
//       .refine((v: string) => v.toLowerCase().endsWith("@gmail.com"), {
//         message: "Email must be a Gmail address (@gmail.com).",
//       }),
//     phone: z
//       .string()
//       .trim()
//       .regex(/^\+91\d{10}$/, "Phone must be +91 followed by 10 digits."),
//     languageOption: z.enum(["English", "Hindi", "Marathi", "Other"], {
//       required_error: "Please select a language.",
//     }),
//     customLanguage: z.string().trim().optional(),
//   })
//   .refine(
//     (data) =>
//       data.languageOption !== "Other" ||
//       (data.customLanguage && data.customLanguage.length >= 2),
//     {
//       message: "Please enter your language (at least 2 characters).",
//       path: ["customLanguage"],
//     }
//   );

// type ProfileForm = z.infer<typeof ProfileSchema>;

// // ---------------------------
// // Page Component
// // ---------------------------
// export default function ProfilePage() {
//   const router = useRouter();

//   // Avatar state
//   const [avatarUrl, setAvatarUrl] = React.useState<string>(
//     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=480&auto=format&fit=facearea&facepad=2&h=480"
//   );
//   const [avatarFile, setAvatarFile] = React.useState<File | null>(null);

//   // Form setup
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm<ProfileForm>({
//     resolver: zodResolver(ProfileSchema),
//     defaultValues: {
//       name: "Ethan Carter",
//       email: "ethan.carter@gmail.com",
//       phone: "+911234567890",
//       languageOption: "English",
//       customLanguage: "",
//     },
//     mode: "onChange",
//   });

//   const phone = watch("phone");
//   const languageOption = watch("languageOption");

//   React.useEffect(() => {
//     if (!phone?.startsWith("+91")) {
//       setValue("phone", "+91", { shouldValidate: true });
//       return;
//     }
//     const digits = phone.slice(3).replace(/\D/g, "").slice(0, 10);
//     const formatted = "+91" + digits;
//     if (formatted !== phone) setValue("phone", formatted, { shouldValidate: true });
//   }, [phone, setValue]);

//   // Avatar upload handler
//   const onAvatarChange = (file?: File) => {
//     if (!file) return;
//     const isImage = /^image\/(png|jpe?g|webp|gif|svg\+xml)$/.test(file.type);
//     if (!isImage) {
//       alert("Please select a valid image file.");
//       return;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       alert("Please choose an image smaller than 5MB.");
//       return;
//     }
//     setAvatarFile(file);
//     const url = URL.createObjectURL(file);
//     setAvatarUrl(url);
//   };

//   // Submit
//   const onSubmit = async (data: ProfileForm) => {
//     // Derive final language from the two fields
//     const finalLanguage =
//       data.languageOption === "Other"
//         ? (data.customLanguage || "").trim()
//         : data.languageOption;

//     const payload = {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       language: finalLanguage,
//     };

//     console.log("Saving profile:", payload);
//     if (avatarFile) {
//       console.log("Uploading avatar:", avatarFile.name);
//     }
//     await new Promise((r) => setTimeout(r, 700));
//     router.push("/user"); // ✅ redirect after save
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-blue-50">
//       {/* Header */}
//       <Header/>
//       <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-blue-100">
//         <button
//           onClick={() => router.back()}
//           className="flex items-center justify-center p-2 text-blue-900 transition-colors rounded-full hover:bg-blue-50"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </button>
//         <h1 className="text-lg font-bold text-blue-900">Profile</h1>
//         <div className="w-10" />
//       </header>

//       {/* Main */}
//       <main className="flex-1 p-4 overflow-y-auto sm:p-6">
//         <div className="w-full max-w-full mx-auto sm:max-w-lg">
//           {/* Avatar */}
//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               <Avatar className="w-24 h-24 border-4 border-white shadow-md sm:w-32 sm:h-32">
//                 <AvatarImage src={avatarUrl} alt="Profile picture" />
//                 <AvatarFallback className="text-blue-900 bg-blue-100">
//                   EC
//                 </AvatarFallback>
//               </Avatar>
//               <label
//                 htmlFor="avatar"
//                 className={cn(
//                   "absolute bottom-0 right-0 grid h-8 w-8 sm:h-10 sm:w-10 cursor-pointer place-items-center rounded-full bg-blue-600 text-white shadow-md",
//                   "ring-2 ring-white hover:bg-blue-700"
//                 )}
//               >
//                 <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <input
//                   id="avatar"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => onAvatarChange(e.target.files?.[0] ?? undefined)}
//                 />
//               </label>
//             </div>

//             <div className="text-center">
//               <h2 className="text-xl font-bold sm:text-2xl text-blue-950">
//                 {watch("name") || "Your Name"}
//               </h2>
//               <p className="text-sm sm:text-base text-blue-800/60">
//                 Member since 2021
//               </p>
//             </div>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="p-4 mt-8 space-y-8 bg-white shadow-sm rounded-2xl sm:p-6"
//           >
//             {/* Personal Details */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-blue-950">
//                 Personal Details
//               </h3>

//               <div className="space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   placeholder="Your full name"
//                   {...register("name")}
//                 />
//                 {errors.name && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="yourname@gmail.com"
//                   {...register("email")}
//                 />
//                 {errors.email && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-1.5">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   inputMode="numeric"
//                   placeholder="+91XXXXXXXXXX"
//                   {...register("phone")}
//                 />
//                 {errors.phone && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.phone.message}
//                   </p>
//                 )}
//               </div>
//             </section>

//             {/* Preferences */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-blue-950">Preferences</h3>

//               <div className="space-y-1.5">
//                 <Label htmlFor="language">Language</Label>
//                 <Select
//                   value={languageOption}
//                   onValueChange={(val) => {
//                     setValue("languageOption", val as ProfileForm["languageOption"], {
//                       shouldValidate: true,
//                       shouldDirty: true,
//                     });
//                     // Reset custom text if user changes away from "Other"
//                     if (val !== "Other") {
//                       setValue("customLanguage", "", { shouldValidate: true });
//                     }
//                   }}
//                 >
//                   <SelectTrigger id="language" className="w-full">
//                     <SelectValue placeholder="Select language" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border border-blue-100 rounded-md shadow-lg">
//                     <SelectItem value="English">English</SelectItem>
//                     <SelectItem value="Hindi">Hindi</SelectItem>
//                     <SelectItem value="Marathi">Marathi</SelectItem>
//                     <SelectItem value="Other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 {/* If "Other" selected → show text input */}
//                 {languageOption === "Other" && (
//                   <div className="mt-2 space-y-1.5">
//                     <Input
//                       placeholder="Enter your language"
//                       autoComplete="off"
//                       {...register("customLanguage")}
//                     />
//                     {errors.customLanguage && (
//                       <p className="flex items-center gap-1 text-sm text-red-600">
//                         <TriangleAlert className="w-4 h-4" />{" "}
//                         {errors.customLanguage.message}
//                       </p>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </section>

//             {/* Save button */}
//             <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
//               <Button
//                 type="button"
//                 variant="secondary"
//                 className="text-blue-800 bg-blue-100 hover:bg-blue-200"
//                 onClick={() => router.push("/user")}
//               >
//                 Back to Dashboard
//               </Button>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center gap-2">
//                     <Upload className="w-4 h-4 animate-bounce" />
//                     Saving...
//                   </span>
//                 ) : (
//                   <span className="flex items-center gap-2">
//                     <CheckCircle2 className="w-4 h-4" />
//                     Save Changes
//                   </span>
//                 )}
//               </Button>
//             </div>
//           </form>
//         </div>
//         <BottomNav/>
//       </main>
//     </div>
//   );
// }

// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { getAuth, User } from "firebase/auth";
// import {
//   ArrowLeft,
//   Camera,
//   Upload,
//   CheckCircle2,
//   TriangleAlert,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";

// // ---------------------------
// // Validation schema (Zod)
// // ---------------------------
// const ProfileSchema = z
//   .object({
//     name: z.string().trim().min(2, "Name must be at least 2 characters."),
//     email: z
//       .string()
//       .trim()
//       .email("Enter a valid email.")
//       .refine((v: string) => v.toLowerCase().endsWith("@gmail.com"), {
//         message: "Email must be a Gmail address (@gmail.com).",
//       }),
//     phone: z
//       .string()
//       .trim()
//       .regex(/^\+91\d{10}$/, "Phone must be +91 followed by 10 digits."),
//     languageOption: z.enum(["English", "Hindi", "Marathi", "Other"], {
//       required_error: "Please select a language.",
//     }),
//     customLanguage: z.string().trim().optional(),
//   })
//   .refine(
//     (data) =>
//       data.languageOption !== "Other" ||
//       (data.customLanguage && data.customLanguage.length >= 2),
//     {
//       message: "Please enter your language (at least 2 characters).",
//       path: ["customLanguage"],
//     }
//   );

// type ProfileForm = z.infer<typeof ProfileSchema>;

// export default function ProfilePage() {
//   const router = useRouter();

//   // Avatar state
//   const [avatarUrl, setAvatarUrl] = React.useState<string>(
//     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=480&auto=format&fit=facearea&facepad=2&h=480"
//   );
//   const [avatarFile, setAvatarFile] = React.useState<File | null>(null);

//   // Form setup
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ProfileForm>({
//     resolver: zodResolver(ProfileSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "+91",
//       languageOption: "English",
//       customLanguage: "",
//     },
//     mode: "onChange",
//   });

//   const phone = watch("phone");
//   const languageOption = watch("languageOption");

//   // Fetch current user from Firebase Auth
//   React.useEffect(() => {
//     const auth = getAuth();
//     const currentUser: User | null = auth.currentUser;

//     if (currentUser) {
//       reset({
//         name: currentUser.displayName || "",
//         email: currentUser.email || "",
//         phone: "+91", // default
//         languageOption: "English",
//         customLanguage: "",
//       });
//       if (currentUser.photoURL) setAvatarUrl(currentUser.photoURL);
//     } else {
//       router.push("/login"); // redirect if not logged in
//     }
//   }, [reset, router]);

//   // Format phone automatically
//   React.useEffect(() => {
//     if (!phone?.startsWith("+91")) {
//       setValue("phone", "+91", { shouldValidate: true });
//       return;
//     }
//     const digits = phone.slice(3).replace(/\D/g, "").slice(0, 10);
//     const formatted = "+91" + digits;
//     if (formatted !== phone) setValue("phone", formatted, { shouldValidate: true });
//   }, [phone, setValue]);

//   // Avatar upload handler
//   const onAvatarChange = (file?: File) => {
//     if (!file) return;
//     const isImage = /^image\/(png|jpe?g|webp|gif|svg\+xml)$/.test(file.type);
//     if (!isImage) {
//       alert("Please select a valid image file.");
//       return;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       alert("Please choose an image smaller than 5MB.");
//       return;
//     }
//     setAvatarFile(file);
//     const url = URL.createObjectURL(file);
//     setAvatarUrl(url);
//   };

//   // Submit handler
//   const onSubmit = async (data: ProfileForm) => {
//     const finalLanguage =
//       data.languageOption === "Other"
//         ? (data.customLanguage || "").trim()
//         : data.languageOption;

//     const payload = {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       language: finalLanguage,
//     };

//     console.log("Saving profile:", payload);
//     if (avatarFile) console.log("Uploading avatar:", avatarFile.name);

//     await new Promise((r) => setTimeout(r, 700));
//     router.push("/user"); // Redirect to user dashboard
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-blue-50">
//       <Header />
//       <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-blue-100">
//         <button
//           onClick={() => router.back()}
//           className="flex items-center justify-center p-2 text-blue-900 transition-colors rounded-full hover:bg-blue-50"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </button>
//         <h1 className="text-lg font-bold text-blue-900">Profile</h1>
//         <div className="w-10" />
//       </header>

//       <main className="flex-1 p-4 overflow-y-auto sm:p-6">
//         <div className="w-full max-w-full mx-auto sm:max-w-lg">
//           {/* Avatar */}
//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               <Avatar className="w-24 h-24 border-4 border-white shadow-md sm:w-32 sm:h-32">
//                 <AvatarImage src={avatarUrl} alt="Profile picture" />
//                 <AvatarFallback className="text-blue-900 bg-blue-100">
//                   {watch("name").charAt(0) || "U"}
//                   {watch("name").split(" ")[1]?.charAt(0) || ""}
//                 </AvatarFallback>
//               </Avatar>
//               <label
//                 htmlFor="avatar"
//                 className={cn(
//                   "absolute bottom-0 right-0 grid h-8 w-8 sm:h-10 sm:w-10 cursor-pointer place-items-center rounded-full bg-blue-600 text-white shadow-md",
//                   "ring-2 ring-white hover:bg-blue-700"
//                 )}
//               >
//                 <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <input
//                   id="avatar"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => onAvatarChange(e.target.files?.[0] ?? undefined)}
//                 />
//               </label>
//             </div>

//             <div className="text-center">
//               <h2 className="text-xl font-bold sm:text-2xl text-blue-950">
//                 {watch("name") || "Your Name"}
//               </h2>
//               <p className="text-sm sm:text-base text-blue-800/60">
//                 Member since 2021
//               </p>
//             </div>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="p-4 mt-8 space-y-8 bg-white shadow-sm rounded-2xl sm:p-6"
//           >
//             {/* Personal Details */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-blue-950">Personal Details</h3>

//               <div className="space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Your full name" {...register("name")} />
//                 {errors.name && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="yourname@gmail.com" {...register("email")} />
//                 {errors.email && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-1.5">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input id="phone" inputMode="numeric" placeholder="+91XXXXXXXXXX" {...register("phone")} />
//                 {errors.phone && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.phone.message}
//                   </p>
//                 )}
//               </div>
//             </section>

//             {/* Preferences */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-blue-950">Preferences</h3>
//               <div className="space-y-1.5">
//                 <Label htmlFor="language">Language</Label>
//                 <Select
//                   value={languageOption}
//                   onValueChange={(val) => {
//                     setValue("languageOption", val as ProfileForm["languageOption"], {
//                       shouldValidate: true,
//                       shouldDirty: true,
//                     });
//                     if (val !== "Other") setValue("customLanguage", "", { shouldValidate: true });
//                   }}
//                 >
//                   <SelectTrigger id="language" className="w-full">
//                     <SelectValue placeholder="Select language" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border border-blue-100 rounded-md shadow-lg">
//                     <SelectItem value="English">English</SelectItem>
//                     <SelectItem value="Hindi">Hindi</SelectItem>
//                     <SelectItem value="Marathi">Marathi</SelectItem>
//                     <SelectItem value="Other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 {languageOption === "Other" && (
//                   <div className="mt-2 space-y-1.5">
//                     <Input placeholder="Enter your language" autoComplete="off" {...register("customLanguage")} />
//                     {errors.customLanguage && (
//                       <p className="flex items-center gap-1 text-sm text-red-600">
//                         <TriangleAlert className="w-4 h-4" /> {errors.customLanguage.message}
//                       </p>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </section>

//             {/* Buttons */}
//             <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
//               <Button
//                 type="button"
//                 variant="secondary"
//                 className="text-blue-800 bg-blue-100 hover:bg-blue-200"
//                 onClick={() => router.push("/user")}
//               >
//                 Back to Dashboard
//               </Button>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center gap-2">
//                     <Upload className="w-4 h-4 animate-bounce" />
//                     Saving...
//                   </span>
//                 ) : (
//                   <span className="flex items-center gap-2">
//                     <CheckCircle2 className="w-4 h-4" />
//                     Save Changes
//                   </span>
//                 )}
//               </Button>
//             </div>
//           </form>
//         </div>
//         <BottomNav />
//       </main>
//     </div>
//   );
// }



// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { User } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import {
//   ArrowLeft,
//   Camera,
//   Upload,
//   CheckCircle2,
//   TriangleAlert,
// } from "lucide-react";

// import { auth, db } from "@/lib/firebaseConfig"; // ✅ Corrected import

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";

// // ---------------------------
// // Validation schema (Zod)
// // ---------------------------
// const ProfileSchema = z
//   .object({
//     name: z.string().trim().min(2, "Name must be at least 2 characters."),
//     email: z
//       .string()
//       .trim()
//       .email("Enter a valid email.")
//       .refine((v: string) => v.toLowerCase().endsWith("@gmail.com"), {
//         message: "Email must be a Gmail address (@gmail.com).",
//       }),
//     phone: z
//       .string()
//       .trim()
//       .regex(/^\+91\d{10}$/, "Phone must be +91 followed by 10 digits."),
//     languageOption: z.enum(["English", "Hindi", "Marathi", "Other"], {
//       required_error: "Please select a language.",
//     }),
//     customLanguage: z.string().trim().optional(),
//   })
//   .refine(
//     (data) =>
//       data.languageOption !== "Other" ||
//       (data.customLanguage && data.customLanguage.length >= 2),
//     {
//       message: "Please enter your language (at least 2 characters).",
//       path: ["customLanguage"],
//     }
//   );

// type ProfileForm = z.infer<typeof ProfileSchema>;

// export default function ProfilePage() {
//   const router = useRouter();

//   const [avatarUrl, setAvatarUrl] = React.useState<string>(
//     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=480&auto=format&fit=facearea&facepad=2&h=480"
//   );
//   const [avatarFile, setAvatarFile] = React.useState<File | null>(null);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ProfileForm>({
//     resolver: zodResolver(ProfileSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "+91",
//       languageOption: "English",
//       customLanguage: "",
//     },
//     mode: "onChange",
//   });

//   const phone = watch("phone");
//   const languageOption = watch("languageOption");

//   // ---------------------------
//   // Fetch user profile from Firestore or Firebase Auth
//   // ---------------------------
//   React.useEffect(() => {
//     const currentUser: User | null = auth.currentUser;

//     if (!currentUser) {
//       router.push("/login");
//       return;
//     }

//     const fetchProfile = async () => {
//       const docRef = doc(db, "users", currentUser.uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         reset({
//           name: data.name || currentUser.displayName || "",
//           email: data.email || currentUser.email || "",
//           phone: data.phone || "+91",
//           languageOption: data.language || "English",
//           customLanguage: data.customLanguage || "",
//         });
//         if (data.avatarUrl) setAvatarUrl(data.avatarUrl);
//       } else {
//         // If no Firestore doc exists, use Auth info
//         reset({
//           name: currentUser.displayName || "",
//           email: currentUser.email || "",
//           phone: "+91",
//           languageOption: "English",
//           customLanguage: "",
//         });
//         if (currentUser.photoURL) setAvatarUrl(currentUser.photoURL);
//       }
//     };

//     fetchProfile();
//   }, [reset, router]);

//   // Format phone automatically
//   React.useEffect(() => {
//     if (!phone?.startsWith("+91")) {
//       setValue("phone", "+91", { shouldValidate: true });
//       return;
//     }
//     const digits = phone.slice(3).replace(/\D/g, "").slice(0, 10);
//     const formatted = "+91" + digits;
//     if (formatted !== phone) setValue("phone", formatted, { shouldValidate: true });
//   }, [phone, setValue]);

//   // Avatar upload handler
//   const onAvatarChange = (file?: File) => {
//     if (!file) return;
//     const isImage = /^image\/(png|jpe?g|webp|gif|svg\+xml)$/.test(file.type);
//     if (!isImage) {
//       alert("Please select a valid image file.");
//       return;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       alert("Please choose an image smaller than 5MB.");
//       return;
//     }
//     setAvatarFile(file);
//     const url = URL.createObjectURL(file);
//     setAvatarUrl(url);
//   };

//   // ---------------------------
//   // Submit form and save to Firestore
//   // ---------------------------
//   const onSubmit = async (data: ProfileForm) => {
//     const currentUser = auth.currentUser;
//     if (!currentUser) return;

//     const finalLanguage =
//       data.languageOption === "Other"
//         ? (data.customLanguage || "").trim()
//         : data.languageOption;

//     const payload = {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       language: finalLanguage,
//       customLanguage: data.customLanguage || "",
//       avatarUrl,
//     };

//     try {
//       await setDoc(doc(db, "users", currentUser.uid), payload, { merge: true });
//       console.log("Profile saved:", payload);
//       router.push("/user");
//     } catch (err) {
//       console.error("Error saving profile:", err);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-blue-50">
//       <Header />
//       <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-blue-100">
//         <button
//           onClick={() => router.back()}
//           className="flex items-center justify-center p-2 text-blue-900 transition-colors rounded-full hover:bg-blue-50"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </button>
//         <h1 className="text-lg font-bold text-blue-900">Profile</h1>
//         <div className="w-10" />
//       </header>

//       <main className="flex-1 p-4 overflow-y-auto sm:p-6">
//         <div className="w-full max-w-full mx-auto sm:max-w-lg">
//           {/* Avatar */}
//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               <Avatar className="w-24 h-24 border-4 border-white shadow-md sm:w-32 sm:h-32">
//                 <AvatarImage src={avatarUrl} alt="Profile picture" />
//                 <AvatarFallback className="text-blue-900 bg-blue-100">
//                   {watch("name").charAt(0) || "U"}
//                   {watch("name").split(" ")[1]?.charAt(0) || ""}
//                 </AvatarFallback>
//               </Avatar>
//               <label
//                 htmlFor="avatar"
//                 className={cn(
//                   "absolute bottom-0 right-0 grid h-8 w-8 sm:h-10 sm:w-10 cursor-pointer place-items-center rounded-full bg-blue-600 text-white shadow-md",
//                   "ring-2 ring-white hover:bg-blue-700"
//                 )}
//               >
//                 <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <input
//                   id="avatar"
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => onAvatarChange(e.target.files?.[0] ?? undefined)}
//                 />
//               </label>
//             </div>

//             <div className="text-center">
//               <h2 className="text-xl font-bold sm:text-2xl text-blue-950">
//                 {watch("name") || "Your Name"}
//               </h2>
//               <p className="text-sm sm:text-base text-blue-800/60">
//                 Member since 2021
//               </p>
//             </div>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="p-4 mt-8 space-y-8 bg-white shadow-sm rounded-2xl sm:p-6"
//           >
//             {/* Personal Details */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-blue-950">Personal Details</h3>

//               <div className="space-y-1.5">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Your full name" {...register("name")} />
//                 {errors.name && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="yourname@gmail.com" {...register("email")} />
//                 {errors.email && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div className="space-y-1.5">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input id="phone" inputMode="numeric" placeholder="+91XXXXXXXXXX" {...register("phone")} />
//                 {errors.phone && (
//                   <p className="flex items-center gap-1 text-sm text-red-600">
//                     <TriangleAlert className="w-4 h-4" /> {errors.phone.message}
//                   </p>
//                 )}
//               </div>
//             </section>

//             {/* Preferences */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-blue-950">Preferences</h3>
//               <div className="space-y-1.5">
//                 <Label htmlFor="language">Language</Label>
//                 <Select
//                   value={languageOption}
//                   onValueChange={(val) => {
//                     setValue("languageOption", val as ProfileForm["languageOption"], {
//                       shouldValidate: true,
//                       shouldDirty: true,
//                     });
//                     if (val !== "Other") setValue("customLanguage", "", { shouldValidate: true });
//                   }}
//                 >
//                   <SelectTrigger id="language" className="w-full">
//                     <SelectValue placeholder="Select language" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border border-blue-100 rounded-md shadow-lg">
//                     <SelectItem value="English">English</SelectItem>
//                     <SelectItem value="Hindi">Hindi</SelectItem>
//                     <SelectItem value="Marathi">Marathi</SelectItem>
//                     <SelectItem value="Other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 {languageOption === "Other" && (
//                   <div className="mt-2 space-y-1.5">
//                     <Input placeholder="Enter your language" autoComplete="off" {...register("customLanguage")} />
//                     {errors.customLanguage && (
//                       <p className="flex items-center gap-1 text-sm text-red-600">
//                         <TriangleAlert className="w-4 h-4" /> {errors.customLanguage.message}
//                       </p>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </section>

//             {/* Buttons */}
//             <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
//               <Button
//                 type="button"
//                 variant="secondary"
//                 className="text-blue-800 bg-blue-100 hover:bg-blue-200"
//                 onClick={() => router.push("/user")}
//               >
//                 Back to Dashboard
//               </Button>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center gap-2">
//                     <Upload className="w-4 h-4 animate-bounce" />
//                     Saving...
//                   </span>
//                 ) : (
//                   <span className="flex items-center gap-2">
//                     <CheckCircle2 className="w-4 h-4" />
//                     Save Changes
//                   </span>
//                 )}
//               </Button>
//             </div>
//           </form>
//         </div>
//         <BottomNav />
//       </main>
//     </div>
//   );
// }



// app/user/profile/page.tsx
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  ArrowLeft,
  Camera,
  Upload,
  CheckCircle2,
  TriangleAlert,
} from "lucide-react";

import { db } from "@/lib/firebaseConfig";
import useAuth from "@/hooks/useAuth"; // ✅ useAuth hook

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";

// ---------------------------
// Validation schema (Zod)
// ---------------------------
const ProfileSchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters."),
    email: z
      .string()
      .trim()
      .email("Enter a valid email.")
      .refine((v: string) => v.toLowerCase().endsWith("@gmail.com"), {
        message: "Email must be a Gmail address (@gmail.com).",
      }),
    phone: z
      .string()
      .trim()
      .regex(/^\+91\d{10}$/, "Phone must be +91 followed by 10 digits."),
    languageOption: z.enum(["English", "Hindi", "Marathi", "Other"], {
      required_error: "Please select a language.",
    }),
    customLanguage: z.string().trim().optional(),
  })
  .refine(
    (data) =>
      data.languageOption !== "Other" ||
      (data.customLanguage && data.customLanguage.length >= 2),
    {
      message: "Please enter your language (at least 2 characters).",
      path: ["customLanguage"],
    }
  );

type ProfileForm = z.infer<typeof ProfileSchema>;

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading } = useAuth(); // ✅ wait for auth

  const [avatarUrl, setAvatarUrl] = React.useState<string>(
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=480&auto=format&fit=facearea&facepad=2&h=480"
  );
  const [avatarFile, setAvatarFile] = React.useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileForm>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "+91",
      languageOption: "English",
      customLanguage: "",
    },
    mode: "onChange",
  });

  const phone = watch("phone");
  const languageOption = watch("languageOption");

  // ---------------------------
  // Fetch profile after auth is ready
  // ---------------------------
  React.useEffect(() => {
    if (loading) return; // wait for auth
    if (!user) {
      router.push("/sign-up");
      return;
    }

    const fetchProfile = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        reset({
          name: data.name || user.displayName || "",
          email: data.email || user.email || "",
          phone: data.phone || "+91",
          languageOption: data.language || "English",
          customLanguage: data.customLanguage || "",
        });
        if (data.avatarUrl) setAvatarUrl(data.avatarUrl);
      } else {
        reset({
          name: user.displayName || "",
          email: user.email || "",
          phone: "+91",
          languageOption: "English",
          customLanguage: "",
        });
        if (user.photoURL) setAvatarUrl(user.photoURL);
      }
    };

    fetchProfile();
  }, [loading, user, reset, router]);

  // Format phone automatically
  React.useEffect(() => {
    if (!phone?.startsWith("+91")) {
      setValue("phone", "+91", { shouldValidate: true });
      return;
    }
    const digits = phone.slice(3).replace(/\D/g, "").slice(0, 10);
    const formatted = "+91" + digits;
    if (formatted !== phone) setValue("phone", formatted, { shouldValidate: true });
  }, [phone, setValue]);

  // Avatar upload handler
  const onAvatarChange = (file?: File) => {
    if (!file) return;
    const isImage = /^image\/(png|jpe?g|webp|gif|svg\+xml)$/.test(file.type);
    if (!isImage) {
      alert("Please select a valid image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Please choose an image smaller than 5MB.");
      return;
    }
    setAvatarFile(file);
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  // ---------------------------
  // Submit form and save to Firestore
  // ---------------------------
  const onSubmit = async (data: ProfileForm) => {
    if (!user) return;

    const finalLanguage =
      data.languageOption === "Other"
        ? (data.customLanguage || "").trim()
        : data.languageOption;

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      language: finalLanguage,
      customLanguage: data.customLanguage || "",
      avatarUrl,
    };

    try {
      await setDoc(doc(db, "users", user.uid), payload, { merge: true });
      console.log("Profile saved:", payload);
      router.push("/user");
    } catch (err) {
      console.error("Error saving profile:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null; // avoid flicker before redirect

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b border-blue-100">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center p-2 text-blue-900 transition-colors rounded-full hover:bg-blue-50"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-blue-900">Profile</h1>
        <div className="w-10" />
      </header>
<main className="flex-1 p-4 overflow-y-auto sm:p-6">
     <div className="w-full max-w-full mx-auto sm:max-w-lg">
       {/* Avatar */}
       <div className="flex flex-col items-center gap-4">
         <div className="relative">
           <Avatar className="w-24 h-24 border-4 border-white shadow-md sm:w-32 sm:h-32">
             <AvatarImage src={avatarUrl} alt="Profile picture" />
             <AvatarFallback className="text-blue-900 bg-blue-100">
               {watch("name").charAt(0) || "U"}
               {watch("name").split(" ")[1]?.charAt(0) || ""}
             </AvatarFallback>
           </Avatar>
           <label
                htmlFor="avatar"
                className={cn(
                  "absolute bottom-0 right-0 grid h-8 w-8 sm:h-10 sm:w-10 cursor-pointer place-items-center rounded-full bg-blue-600 text-white shadow-md",
                  "ring-2 ring-white hover:bg-blue-700"
                )}
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onAvatarChange(e.target.files?.[0] ?? undefined)}
                />
              </label>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-bold sm:text-2xl text-blue-950">
                {watch("name") || "Your Name"}
              </h2>
              <p className="text-sm sm:text-base text-blue-800/60">
                Member since 2021
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 mt-8 space-y-8 bg-white shadow-sm rounded-2xl sm:p-6"
          >
            {/* Personal Details */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-950">Personal Details</h3>

              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" {...register("name")} />
                {errors.name && (
                  <p className="flex items-center gap-1 text-sm text-red-600">
                    <TriangleAlert className="w-4 h-4" /> {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="yourname@gmail.com" {...register("email")} />
                {errors.email && (
                  <p className="flex items-center gap-1 text-sm text-red-600">
                    <TriangleAlert className="w-4 h-4" /> {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" inputMode="numeric" placeholder="+91XXXXXXXXXX" {...register("phone")} />
                {errors.phone && (
                  <p className="flex items-center gap-1 text-sm text-red-600">
                    <TriangleAlert className="w-4 h-4" /> {errors.phone.message}
                  </p>
                )}
              </div>
            </section>

            {/* Preferences */}
            <section className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-950">Preferences</h3>
              <div className="space-y-1.5">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={languageOption}
                  onValueChange={(val) => {
                    setValue("languageOption", val as ProfileForm["languageOption"], {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                    if (val !== "Other") setValue("customLanguage", "", { shouldValidate: true });
                  }}
                >
                  <SelectTrigger id="language" className="w-full">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-100 rounded-md shadow-lg">
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Marathi">Marathi</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>

                {languageOption === "Other" && (
                  <div className="mt-2 space-y-1.5">
                    <Input placeholder="Enter your language" autoComplete="off" {...register("customLanguage")} />
                    {errors.customLanguage && (
                      <p className="flex items-center gap-1 text-sm text-red-600">
                        <TriangleAlert className="w-4 h-4" /> {errors.customLanguage.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
              <Button
                type="button"
                variant="secondary"
                className="text-blue-800 bg-blue-100 hover:bg-blue-200"
                onClick={() => router.push("/user")}
              >
                Back to Dashboard
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4 animate-bounce" />
                    Saving...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Save Changes
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
        <BottomNav />
      </main>
    </div>
  );
}
