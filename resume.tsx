'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Github, Youtube, FolderOpen } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import NetworkBackground from "@/components/NetworkBackground"
import DarkModeToggle from "@/components/DarkModeToggle"
import { useState } from "react"

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen py-8 ${isDarkMode ? 'dark' : ''}`}>
      <NetworkBackground />
      <DarkModeToggle onToggle={setIsDarkMode} isDark={isDarkMode} />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
                    <Card className={`mb-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
                        <CardContent className="pt-8">
                <div className="text-center mb-8">
              {/* Add profile picture */}
              <div className="mb-4">
                <img
                  src="img/mypic.png"
                  alt="รูปโปรไฟล์"
                  className="w-32 h-32 md:w-80 md:h-80 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Supawit Kaennak</h1>
              <p className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Hi my nickname parn.</p>
              <div className={`flex flex-wrap justify-center gap-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
                  <span>Chiang Mai</span>
                </div>
                <div className="flex items-center gap-1">
                <a href="https://github.com/SupawitKaennak" className={`${isDarkMode ? 'text-blue-400' : 'text-gray-600'} hover:underline flex items-center gap-1`}>
                  <Github className="w-4 h-4" />
                  <span>https://github.com/SupawitKaennak</span>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content: All sections in one column for mobile, grid for desktop */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-4">
          {/* Left/Main Content (About, Experience, Education, Projects) */}
          <div className="md:col-span-3 flex flex-col gap-8">
                          {/* About Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Third-year Software Engineering student with a basic understanding of programming languages including SLC, Python, HTML, CSS, PHP, MySQL, JavaScript, and TypeScript.
Although I have limited hands-on experience, I am eager to learn, open to feedback, and ready to grow through real-world challenges.
                </p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <Carousel>
                  <CarouselContent>
                    {/* Experience 1 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Big data </h3>
                             <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Guizhou Light Industry Polytechnic</p>
                           </div>
                           <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2024</span>
                        </div>
                        <ul className={`list-disc list-inside space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li>articipated in a 2-month student exchange.</li>
                          <li>Learning Python, Data Analyzing, Machine Learning.</li>
                          <li>Learning Framework for Bigdata, Hadoop, HiveQL, Hbase(Apache Hbase), Zookeeper(Apache Zookeeper).</li>
                        </ul>
                      </div>
                    </CarouselItem>
                    {/* Experience 2 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                          
                            <h3 className="text-lg font-semibold">Network</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>National Telecom Public Company Limited</p>
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2022</span>
                        </div>
                        <ul className={`list-disc list-inside space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li>Internship in a 2-month.</li>
                          <li>Learning About Config router, Ip, Static Ip, DHPC, Installation and update firmware, Network Security and Network diagram design.</li>
                          <li>Industry visit at "Sop Poeng Sub District Administration Organization".</li>
                        </ul>
                      </div>
                    </CarouselItem>
                    {/* Experience 3 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Computer and Electronics</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Speed Cm Company Limited</p>
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2020</span>
                        </div>
                        <ul className={`list-disc list-inside space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <li>Internship in a 2-month.</li>
                          <li>Computer and Electronic Equipment Repair Technician.</li>
                          <li>Industry visit at "Heng Leasing and Capital Public Company Limited" and CCTV Installation.</li>
                        </ul>
                      </div>
                    </CarouselItem>

                    {/* Experience 4: Gallery */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Exchange Student</h3>                          
                          </div>                     
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture20.jpg"
                              alt="Internship Gallery Preview"
                              className="w-full h-40 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Gallery Image</DialogTitle>
                            <DialogDescription className="sr-only">Gallery image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture20.jpg" alt="Gallery1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture21.jpg" alt="Gallery2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture22.jpg" alt="Gallery3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture23.jpg" alt="Gallery4" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CarouselItem>

                    {/* Experience 5: Gallery */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">High vocational Certificate Level 2</h3>                          
                          </div>                     
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture14.png"
                              alt="Internship Gallery Preview"
                              className="w-full h-40 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Gallery Image</DialogTitle>
                            <DialogDescription className="sr-only">Gallery image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture14.png" alt="Gallery1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture15.jpg" alt="Gallery2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture16.jpg" alt="Gallery3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture24.jpg" alt="Gallery3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture25.png" alt="Gallery3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture26.png" alt="Gallery3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CarouselItem>

                    {/* Experience 6: Gallery */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Vocational Certificate Year 3</h3>                          
                          </div>                     
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture17.jpg"
                              alt="Internship Gallery Preview"
                              className="w-full h-40 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Gallery Image</DialogTitle>
                            <DialogDescription className="sr-only">Gallery image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture17.jpg" alt="Gallery1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture18.jpg" alt="Gallery2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture19.jpg" alt="Gallery3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
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

            {/* Education Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">Software Engineering</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rajamangala University of technology Lanna </p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Bachelor's Degree (currently studying)</p>
                  </div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023</span>
                </div>
              </CardContent>   
            
            <div>            
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">Network Computer</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Chiang Mai Technical College</p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Diploma / Higher Vocational Certificate (Graduate) </p>
                  </div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2022</span>
                </div>
              </CardContent>  
            </div>

            <div>            
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">Computer Technology Program</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Chiang Mai Technical College</p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Vocational Certificate (Graduate) </p>
                  </div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2020</span>
                </div>
              </CardContent>  
            </div>
            </Card> 

            {/* Projects Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className="text-2xl">Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Carousel Projects */}
                <Carousel>
                  <CarouselContent>
                    {/* Project 1 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">PATONPHUENG_LEAF_PLATE_MANAGEMENT</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>About Expense and Income Management Dashboard Web Application.</p>
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2025</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture1.jpeg"
                              alt="PICTURE1"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture1.jpeg" alt="PICTURE1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture2.jpeg" alt="PICTURE1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture38.jpeg" alt="PICTURE1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture39.jpeg" alt="PICTURE1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
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
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Develop a web application for managing expenses-income And cost calculation.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Next.js</Badge>
                          <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Node.js</Badge>
                          <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Firebase</Badge>
                          <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>RESTful API</Badge>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <a href="https://github.com/SupawitKaennak/RMUTL_PATONPHUENG_LEAF_PLATE_MANAGEMENT.git" className="text-blue-600 hover:underline flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                     
                     {/* Project 2 */}
                     <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Roblox 3d VRgame for Openhouse "2024 RMUTL Software Engineering"</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>About VRgame roblox.</p>
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2024</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture30.png"
                              alt="PICTURE2"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture30.png" alt="PICTURE2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture31.jpg" alt="PICTURE2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture32.jpg" alt="PICTURE2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture33.png" alt="PICTURE2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture34.png" alt="PICTURE2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
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
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        This game is a VRgame simulation environment and dapartment "C3 Software Engineering.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <Badge variant="outline">Roblox Studio</Badge>
                          <Badge variant="outline">Lua</Badge>  
                        </div>
                        <div className="flex gap-3 text-sm">
                          <a href="https://www.youtube.com/watch?v=gzDVqyh8m9o" className="text-blue-600 hover:underline flex items-center gap-1">F
                            <Youtube className="w-3 h-3" />
                            Youtube
                          </a>
                        </div>
                      </div>
                    </CarouselItem>

                    {/* Project 3 ตัวอย่าง สามารถเพิ่มโปรเจกต์อื่นๆ ได้ที่นี่ */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">OBJECT DETECTION QUADCOPTER</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>About Hardware and software project</p>
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2022</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture3.jpg"
                              alt="PICTURE3"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture3.jpg" alt="PICTURE3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture4.png" alt="PICTURE3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture9.png" alt="PICTURE3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture8.png" alt="PICTURE3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture27.png" alt="PICTURE3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture29.png" alt="PICTURE3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
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
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          About This project in Diploma / High vocational Certificate Level 2(final project) — Completed 
                        </p>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <Badge variant="outline">Python</Badge>
                          <Badge variant="outline">OpenCV</Badge>
                          <Badge variant="outline">YOLO</Badge>
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
                    {/* Project 4 ตัวอย่าง สามารถเพิ่มโปรเจกต์อื่นๆ ได้ที่นี่ */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Electronic Division Simulator 3D On Computer Base</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>About Game and 3d design</p>
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2020</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture5.png"
                              alt="PICTURE4"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture5.png" alt="PICTURE4" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture6.png" alt="PICTURE4" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture7.png" alt="PICTURE4" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
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
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          About Walking simulation Department of electronic at Chiang Mai Technical College
                          This project in Vocational Certificate Year 3(final project) — Completed 
                        </p>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <Badge variant="outline">Unreal Engine</Badge>
                          <Badge variant="outline">Blender</Badge>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <a href="https://drive.google.com/drive/folders/1Ve96HnDRfFD8WxygLHhjyen5bREZI2VP?usp=sharing" className="text-blue-600 hover:underline flex items-center gap-1">
                             <FolderOpen className="w-3 h-3" />
                             GoogleDrive
                           </a>
                        </div>
                      </div>
                    </CarouselItem>
                    {/* Project 5 ตัวอย่าง สามารถเพิ่มโปรเจกต์อื่นๆ ได้ที่นี่ */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">Animation</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Animation and Video Editing</p>
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2019</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture28.png"
                              alt="PICTURE5"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Project Image</DialogTitle>
                            <DialogDescription className="sr-only">Project image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>                             
                                <CarouselItem>
                                  <img src="img/Picture28.png" alt="PICTURE5" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture10.png" alt="PICTURE5" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture11.png" alt="PICTURE5" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                                <CarouselItem>
                                  <img src="img/Picture12.png" alt="PICTURE5" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
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
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        This project in Vocational Certificate Year 2 — Completed 
                        </p>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <Badge variant="outline">Clip Studio Paint</Badge>
                          <Badge variant="outline">Retas studio</Badge>
                          <Badge variant="outline">Adobe Photoshop</Badge>
                          <Badge variant="outline">Adobe Premiere Pro</Badge>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <a href="https://www.youtube.com/watch?v=m84oFcfIzg4" className="text-blue-600 hover:underline flex items-center gap-1">
                            <Youtube className="w-3 h-3" />
                            Youtube
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
          <div className="flex flex-col gap-8">
            {/* Skills Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className="text-xl">Skill</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Language</h4>
                  <div className="flex flex-wrap gap-3">                   
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>typescript</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>python</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-3">                   
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Next.js</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Node.js</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Express</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>MySQL</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Firebase</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & AI</h4>
                                    <div className="flex flex-wrap gap-3">
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>vscode</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>cursor</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>postman</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Git</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Docker</Badge>
                    <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Figma</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className="text-xl">Language</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">                
                <div className="flex justify-between">
                  <span>English</span>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>A2</span>
                </div>
                <div className="flex justify-between">
                  <span>Chinese</span>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Only Read Pinyin</span>
                </div>
              </CardContent>
            </Card>

            {/* Certifications Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Carousel>
                  <CarouselContent>
                    {/* Certification 1 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">CHINESE & BIG DATA TECHNOLOGY</h4>
                            <p className="text-sm text-gray-600">2025</p>
                          </div>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture36.jpeg"
                              alt="Chinese & Big Data Technology Certificate"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Certificate Image</DialogTitle>
                            <DialogDescription className="sr-only">Certificate image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture36.jpeg" alt="Certificate1" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CarouselItem>

                    {/* Certification 2 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">LINK CAMPUS CABLING & NETWORKING</h4>
                            <p className="text-sm text-gray-600">2022</p>
                          </div>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture37.jpeg"
                              alt="Link Campus Cabling & Networking Certificate"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Certificate Image</DialogTitle>
                            <DialogDescription className="sr-only">Certificate image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture37.jpeg" alt="Certificate2" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CarouselItem>

                    {/* Certification 3 */}
                    <CarouselItem>
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">National Telecom Public Company Limited</h4>
                            <p className="text-sm text-gray-600">2022</p>
                          </div>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <img
                              src="img/Picture35.jpeg"
                              alt="NT Certificate"
                              className="w-full h-70 object-cover rounded-lg border shadow-sm cursor-pointer"
                            />
                          </DialogTrigger>
                          <DialogContent className="flex flex-col items-center p-0 bg-transparent shadow-none border-none max-w-[90vw] max-h-[90vh]">
                            <DialogTitle className="sr-only">Certificate Image</DialogTitle>
                            <DialogDescription className="sr-only">Certificate image preview</DialogDescription>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <img src="img/Picture35.jpeg" alt="Certificate3" className="max-w-[85vw] max-h-[85vh] w-auto h-auto rounded-lg mx-auto" />
                                </CarouselItem>
                              </CarouselContent>
                              <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious />
                                <CarouselNext />
                              </div>
                            </Carousel>
                          </DialogContent>
                        </Dialog>
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

            {/* Interests Section */}
            <Card className={isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}>
              <CardHeader>
                <CardTitle className="text-xl ">Hobbies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                                  <div className="flex flex-wrap gap-3">
                   <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Play game</Badge>
                   <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Play guitar</Badge>
                   <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Listen music</Badge>
                   <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Watch movies</Badge>
                   <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Watch anime</Badge>
                   <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>read manga</Badge>
                   <Badge className={isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'}>Coding</Badge>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
