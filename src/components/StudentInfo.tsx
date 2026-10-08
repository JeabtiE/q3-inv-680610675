import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import profileImage from "@/assets/my_img.jpg";

const student = {
  firstName: "Nattapat",
  lastName: "Srirung",
  studentId: "680610675",
  image: profileImage,
  bio: "นักศึกษาชั้นปีที่ 2 ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่",
  hobbies: ["แข่ง case competition และ hackathon", "เล่นดนตรี", "เที่ยวร้านกาแฟ"],
  email: "nattapat_srirung@cmu.ac.th",
  social: "https://www.linkedin.com/in/nattapatsrirung/",
};

export function StudentInfo() {
  const fullName = `${student.firstName} ${student.lastName}`;

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<Button className="bg-blue-500 text-white hover:bg-blue-600" />}
      >
        {fullName}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-lg font-semibold">ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-4">
          <Card>
            <img
              src={student.image}
              alt={fullName}
              className="aspect-[1.05] w-full object-cover"
            />
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-base font-medium">{fullName}</h3>
                <p className="text-muted-foreground">{student.bio}</p>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge>Hobbies</Badge>
                  <span>{student.hobbies.join(", ")}</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge>Email</Badge>
                  <span>{student.email}</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge>Social</Badge>
                  <span>{student.social}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <span>รหัสนักศึกษา: {student.studentId}</span>
            </CardFooter>
          </Card>
        </div>

        <DrawerFooter>
          <DrawerClose render={<Button className="w-full" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
