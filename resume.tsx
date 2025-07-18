import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Github } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              {/* Add profile picture */}
              <div className="mb-4">
                <img
                  src="img/mypic.png"
                  alt="รูปโปรไฟล์"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Supawit Kaennak</h1>
              <p className="text-xl text-gray-600 mb-4">Hi my nickname parn.</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>SupawitKaennak@hotmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>099-143-7795</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>เชียงใหม่</span>
                </div>
                <div className="flex items-center gap-1">
                <a href="https://github.com/SupawitKaennak" className="text-gray hover:underline flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <span>https://github.com/SupawitKaennak</span>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content: All sections in one column for mobile, grid for desktop */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
          {/* Left/Main Content (About, Experience, Education, Projects) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  I am currently a third-year Software Engineering student. 
                  Although I have limited experience in this field, I am always eager to learn new things. 
                  I am determined to solve problems I couldn’t initially complete and won’t give up until I succeed. 
                  I always tell myself, "If we're not good at something yet, we just have to keep trying until we get it."
                </p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">Big data </h3>
                      <p className="text-gray-600">Guizhou Light Industry Polytechnic</p>
                    </div>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>articipated in a 2-month student exchange.</li>
                    <li>Learning Python, Data Analyzing, Machine Learning.</li>
                    <li>Learning Framework for Bigdata, Hadoop, HiveQL, Hbase(Apache Hbase), Zookeeper(Apache Zookeeper).</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">Network</h3>
                      <p className="text-gray-600">National Telecom Public Company Limited</p>
                    </div>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Internship in a 2-month.</li>
                    <li>Learning About Config router, Ip, Static Ip, DHPC, Installation and update firmware, Network Security and Network diagram design.</li>
                    <li>Industry visit at "Sop Poeng Sub District Administration Organization".</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">Network</h3>
                      <p className="text-gray-600">Speed Cm Company Limited</p>
                    </div>
                    <span className="text-sm text-gray-500">2020</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Internship in a 2-month.</li>
                    <li>Computer and Electronic Equipment Repair Technician.</li>
                    <li>Industry visit at "Heng Leasing and Capital Public Company Limited" and CCTV Installation.</li>
                  </ul>
                </div>

              </CardContent>
            </Card>

            {/* Education Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">Software Engineering</h3>
                    <p className="text-gray-600">Rajamangala University of technology Lanna(currently studying) </p>
                    <p className="text-sm text-gray-500">Bachelor's Degree </p>
                  </div>
                  <span className="text-sm text-gray-500">2023</span>
                </div>
              </CardContent>   
            
            <div>            
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">Network Computer</h3>
                    <p className="text-gray-600">Chiang Mai Technical College</p>
                    <p className="text-sm text-gray-500">Diploma / High vocational Certificate Level 2 (Graduate) </p>
                  </div>
                  <span className="text-sm text-gray-500">2020-2022</span>
                </div>
              </CardContent>  
            </div>
            </Card> 

            {/* Projects Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Carousel Projects */}
                <Carousel>
                  <CarouselContent>
                    {/* Project 1 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">PATONPHUENG_LEAF_PLATE_MANAGEMENT</h3>
                            <p className="text-gray-600">Expense and Income Management Dashboard Web Application</p>
                          </div>
                          <span className="text-sm text-gray-500">2025</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture1.png?height=200&width=350"
                              alt="PICTURE1"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture1.png?height=200&width=350" alt="PICTURE1" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture2.png?height=200&width=350" alt="PICTURE1" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                {/* เพิ่มรูปอื่น ๆ ได้ที่นี่ */}
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                        <p className="text-gray-700 text-sm mb-3">
                          Develop a web application for managing expenses-income And cost calculation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">Next.js</Badge>
                          <Badge variant="outline">Node.js</Badge>
                          <Badge variant="outline">Firebase</Badge>
                          <Badge variant="outline">RESTful API</Badge>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <a href="https://github.com/SupawitKaennak/RMUTL_PATONPHUENG_LEAF_PLATE_MANAGEMENT.git" className="text-blue-600 hover:underline flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    {/* Project 2 ตัวอย่าง สามารถเพิ่มโปรเจกต์อื่นๆ ได้ที่นี่ */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">OBJECT DETECTION QUADCOPTER</h3>
                            <p className="text-gray-600">Hardware and software project</p>
                          </div>
                          <span className="text-sm text-gray-500">2022</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture3.jpg?height=200&width=350"
                              alt="PICTURE2"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture3.jpg?height=200&width=350" alt="PICTURE2" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture4.png?height=200&width=350" alt="PICTURE2" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture9.png?height=200&width=350" alt="PICTURE2" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture8.png?height=200&width=350" alt="PICTURE2" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                {/* เพิ่มรูปอื่น ๆ ได้ที่นี่ */}
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                        <p className="text-gray-700 text-sm mb-3">
                          About
                          This project in Diploma / High vocational Certificate Level 2(final project) — Completed 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">Python</Badge>
                          <Badge variant="outline">OpenCV</Badge>
                          <Badge variant="outline">Mission Planner</Badge>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <a href="https://github.com/SupawitKaennak/Detection-Object-yolov3" className="text-blue-600 hover:underline flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    {/* Project 3 ตัวอย่าง สามารถเพิ่มโปรเจกต์อื่นๆ ได้ที่นี่ */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Electronic Division Simulator 3D On Computer Base</h3>
                            <p className="text-gray-600">About Game and 3d design</p>
                          </div>
                          <span className="text-sm text-gray-500">2020</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture5.png?height=200&width=350"
                              alt="PICTURE3"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture5.png" alt="PICTURE3" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture6.png" alt="PICTURE3" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture7.png" alt="PICTURE3" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>                               
                                {/* เพิ่มรูปอื่น ๆ ได้ที่นี่ */}
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                        <p className="text-gray-700 text-sm mb-3">
                          About Walking simulation Department of electronic at Chiang Mai Technical College
                          This project in Vocational Certificate Year 3(final project) — Completed 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">Unreal Engine</Badge>
                          <Badge variant="outline">Blender</Badge>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <a href="https://github.com/SupawitKaennak/portfolio" className="text-blue-600 hover:underline flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                    {/* Project 4 ตัวอย่าง สามารถเพิ่มโปรเจกต์อื่นๆ ได้ที่นี่ */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Animation</h3>
                            <p className="text-gray-600">Personal Portfolio and Resume Website</p>
                          </div>
                          <span className="text-sm text-gray-500">2019</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture10.png?height=200&width=350"
                              alt="PICTURE4"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture10.png" alt="PICTURE4" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture11.png" alt="PICTURE4" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture12.png" alt="PICTURE4" className="max-w-full max-h-[95vh] w-auto h-auto rounded-lg" />
                                </CarouselItem>                               
                                {/* เพิ่มรูปอื่น ๆ ได้ที่นี่ */}
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                        <p className="text-gray-700 text-sm mb-3">
                        This project in Vocational Certificate Year 2 — Completed 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">Clip Studio Paint</Badge>
                          <Badge variant="outline">Retas studio</Badge>
                          <Badge variant="outline">Adobe Photoshop</Badge>
                          <Badge variant="outline">Adobe Premiere Pro</Badge>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <a href="https://github.com/SupawitKaennak/portfolio" className="text-blue-600 hover:underline flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center gap-2 mt-4">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </CardContent>
            </Card>
          </div>
            

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Skills Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Skill</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Language</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">                
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-sm text-gray-600">A2</span>
                </div>
                <div className="flex justify-between">
                  <span>Chinese</span>
                  <span className="text-sm text-gray-600">Only Read Pinyin</span>
                </div>
              </CardContent>
            </Card>

            {/* Certifications Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold">CHINESE & BIG DATA TECHNOLOGY</h4>
                  <p className="text-sm text-gray-600">2023</p>
                </div>
                <div>
                  <h4 className="font-semibold">LINK CAMPUS CABLING & NETWORKING</h4>
                  <p className="text-sm text-gray-600">2022</p>
                </div>
              </CardContent>
            </Card>

            {/* Interests Section */}
            <Card >
              <CardHeader>
                <CardTitle className="text-xl ">Hobbys</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">PLAY GAME</Badge>
                  <Badge variant="outline">PLAY GUITAR</Badge>
                  <Badge variant="outline">LISTEN MUSIC</Badge>
                  <Badge variant="outline">WATCH ANIME</Badge>
                  <Badge variant="outline">CODING</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
