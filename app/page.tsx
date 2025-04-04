import {Button} from "@/components/Button";
import { CircleUser, Globe, HomeIcon, Mail } from "lucide-react";

export default function HomePage() {
  let animations = 'hover:scale-150';
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <div className="animate-in spin-in duration-100 bg-blue-100 h-20 w-20 text-center content-center">...</div>
      <Button className={"bg-sky-500"+" "+animations}><HomeIcon /></Button>
<Button className={"bg-rose-500"+" "+animations}><CircleUser/></Button>
<Button className={"bg-emerald-500"+" "+animations}><Mail/></Button>
<Button className={"bg-violet-500"+" "+animations}><Globe/></Button>
    </main>
  );
}
