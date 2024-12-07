import { Link } from "react-router-dom";


const BestProjects = () => {
    return (
        <div className="h-auto w-full">
            <div className="m-10">
                <p className="text-2xl font-Poppins">Our best</p>
                <p className="lg:text-[300px] text-6xl font-Inter font-bold text-[#262F68]">Projects</p>
            </div>
            {/* best projects */}
            <div>
                <Link to='/projectDetails'><div className="relative">
                    <img className="lg:w-[1280px] w-full h-full lg:h-[480px]" src="https://s3-alpha-sig.figma.com/img/7868/9628/05f451fe38f90329f0973a92b0b4e473?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wzk7wHrThO-jugrtFXcj~xoyo4eHUNkC9u03NMgR4oUobB2wKOglOf7WLX39EoieYtAl~9QEVweLu10F6mrrplZ9lGLBioEuraeLStcu63OAbgU-AawVEkzF-NXcx68K6hTqkGfzlh9QUboi8~XWJ1YkMdY-KyclOe9DJmw5-2umX4zFHY1VKwCLcdEmL5Ufn86MPwWt6IHSku-A6CkbJ2tHfQsfuBFADHuZhKLMlLHmrv9JlR33vfBdFoQdnXToTHrYEl6squQVwlr0wPb2pXyblCraZiuMytrq~GK3bZ6~td5nuCj~RkxqF7fd6Cc2cSuDrTZwkejTK8w5RK4e3g__" alt="" />
                    <div className="w-[330px] absolute top-0 m-10">
                        <p className="my-2 text-lg font-semibold">Interactive overlays</p>
                        <p>Add custom branded graphics that lay over your live video to intro speakers, emphasize key points, and display clickable CTAs.</p>
                    </div>
                </div></Link>
                {/* second pic */}
                <div className="flex lg:flex-row flex-col my-6 justify-center items-center gap-6">
                     <div className="relative">
                        <img className="lg:w-[720px] w-full lg:h-[600px] h-full" src="https://s3-alpha-sig.figma.com/img/f1da/1249/51b02cb9d6dd6425c467784597e2436c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmQwuCPe79~31E2a9WYayXov6kVxB1UsZXC7bllnbjS82daY26Y8rY4cg6JVPygl2N06hbcbuZz0nZCeq0zKJ7q7GpXlcLTvvavSszNmyXzDHLJqsh-vy~W-zUfvUwFo5046bP639UlMsKlVvT1FdiIEjDIR8jBRCPQ8b11wMhhzyOBV9xNaBxOGDpFFO5lj30eY8sJLhU6xYDDjDEZw3S8dFbvvbjS7f8iSYL~S~qAICek7seY7xK6EjEdwjsPTua4wYq1wVwdAwnPTm1aTvxEg8nmIhYhMTz9vu~6dtXwPv8eDNbEHxjx7~N0XEimerOxLzUxi5Fow2vpjylAfhA__" alt="" />
                        <div className="w-80 absolute mx-6 top-10 text-white px-4 py-2 rounded-2xl h-28 bg-[#FCCF12]">
                            <p className="text-xl font-bold">Q & A</p>
                            <p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
                        </div>
                     </div>
                     <div className="relative">
                        <img className="lg:w-[520px] w-full h-full lg:h-[600px]" src="https://s3-alpha-sig.figma.com/img/59cc/396a/0f1a96e576ecc5d051609b88cef6cdaa?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ok8DM5PONB9BbFUJmMzPFJM0n3mCc0OiUiOFyr5nY8HuqS6V8Ezb9-ciwRI67gySxF8FTF4RYXw9~Ur0GvGrui3c2sa49cFiJdSc~YZDVUsk2AnDHjCkrX9PT3YGd9t3J~YfClRnG8xWvwUdji5oACnUu7qfrFmZpVaqLAkA40sqljoqJEPnRQobUUsYTxuW6qg1dbTnBQ~6IXurDuXlXWHG02~pquQrxektg4~2uzYmPoustbU5bhMM1OAfa04qSphBKr3CBDmZe3XrEN2KZzm9uMlMWhzq4m~s5wsZuV-z8f5L9VKQvx--G5ilfA4sxlpyoviTZwiMbq4ntPhOyw__" alt="" />
                        <div className="top-0 w-[520px] h-[600px] absolute bg-gradient-to-t from-transparent to-black">

                        </div>
                        <div className="w-80 absolute mx-6 bottom-10 text-white px-4 py-4 rounded-2xl h-32 bg-[#262F68]">
                            <p className="text-xl">HD Video Quality</p>
                            <p>Provide a better experience for your viewers with crystal clear HD video streaming.</p>
                        </div>
                     </div>

                </div>

                {/* third pic */}
                <div className="flex lg:flex-row flex-col my-6 justify-center items-center gap-6">
                     <div className="relative">
                        <img className="w-[620px] h-[330px]" src="https://s3-alpha-sig.figma.com/img/d9cd/49e9/78b6ee233e40cfb87ac22d3905799f8a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOWeM0DOnvo63aVNb3fM~cf1PyKwhEEqXNZ3NuB1Ov6UBnrFwwUHzRbmyXBobixrxaZI70WNe~v0mbxTdkQUePC7xH~2FlrvAJOF9Jkl42KwdOTxPeLiJqytqLikSRG7mgBnNWzHKd7cNnD3dIAMNIEK6IMcssCYAbJOoRcOf7s-AAkjUjPEDmLWVpu3vbKDxVjiuSIP-UdPviu1rbLJOUHSdpWNzYYrSbIUCzCtCqoENJYrnvMr8iWfIU4HuDC1FDsOEUYkfQTr~ijPOOPubyGwyti4UdZr9kiqv3xKBFz5ErOG8IndQag2dIBJhUW37iTIxHg17pqzC3kSrSpv~g__" alt="" />
                        <div className="w-80 absolute mx-6 top-10 text-white px-4 py-2 rounded-2xl h-28 bg-[#FCCF12]">
                            <p className="text-2xl font-bold">Q & A</p>
                            <p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
                        </div>
                     </div>
                     <div className="relative">
                        <img className="w-[620px] h-[330px]" src="https://s3-alpha-sig.figma.com/img/ac2c/b04f/0482ce295be997fdb60328e6e6fbe5e6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FjN-XtP83hmR-Oomv4cs8DH6koXNsIXwR7rdut1DJnNmgelguKvNpcevA8bIvFVsRdILuqUWbzz~aBRRJLo2YE3Sll0F9iylWJew1~gKUjmsfu9Uj4Slmg3wEW63yp4tqqGTWA1eTewL4S~P1vRkktqI0jSnpjeRcVl1A6OseemcifJjoRPxfMXwvhOhXvSyyWv7vM6AytoGVRrck4FtyUFb0j4QDV3C19HcEFnTBqaXM586XF36rd2H~J8rrdYJ5vvQDGPv-fLAXjyJaWku3Q7Rjvw3ktQ3QnA~fk5WJzJRs76NKwVLep~qrtdlMASQpljrDw7XVj4lHHa3TCAtoQ__" alt="" />

                       
                        <div className="w-80 absolute mx-6 top-10 text-white px-4 py-2 rounded-2xl h-36 bg-[#262F68]">
                            <p className="text-xl font-bold">Chat</p>
                            <p>Chat is where engagement happens. With a slack-like experience, attendees can use emojis, reactions, and gifs to express themselves.</p>
                        </div>
                     </div>

                </div>

                {/* fourth part */}
                <div className="lg:w-[1280px] w-full h-full lg:h-[550px] bg-gradient-to-tr from-[#96B7CD] to-[#E68D83]">
                    <div className="flex justify-between">
                        <div className="w-[330px] mx-6 mt-10">
                              <p className="text-xl mb-2">Drag-n-drop Agenda Builder</p>
                              <p>Quickly rearrange your webinar’s sequence of actions and instantly generate an agenda that auto-updates as you move actions around.</p>
                        </div>
                        <div>
                            <img className="lg:w-[800px] w-full mt-16 h-[490px]" src="https://s3-alpha-sig.figma.com/img/6cce/8469/a4df66008e029b5ab1785d2ba0a9b5fa?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWD~rRoY8cyauDvYQWraV37~spi7UmzmJifDgnWi0sXuHdpjeGVf9w-pQxOxUndMU8lY92uv3VBq~3RX3WQsnGVc98IMpLKRkAkPUhWJjcoovO4FhVkrcj2YJ3TQJhAv~diyiWLViQekmXOK0iu4ug0vDvDy1RKOlsMipf7myGUgZiA4jG6iR2ZGv45m4c95Qol-3n~Ihqf4~wJorZEckD9836Ao1akUYcQT188COql6gufzJ-eUW7yMHC~hfCBz3NCBJ66Q8lnTcYFf29nR9c9ofst3t9few55~qlouFcdKtNw52dEhOzlp7eDvmPaU8WWviA7SWFpLcPjaRICgQw__" alt="" />
                        </div>
                    </div>
</div>

{/* fifth part */}
<div className="flex lg:flex-row flex-col justify-center my-20 items-center gap-6">
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Brand customization</p>
        <p className="font-Inter w-full lg:w-[330px] h-32 text-[#262F68] text-lg">Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.</p>
        <img className="lg:w-[400px] w-full h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/3a09/29e2/4ff3ca4a8d8efe247588b461c3d3e4f4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPq9h1ZBJ1rKSj~yb~3YtrMRYYr-vnqeQCpyQ5VzO7HXbT2rPIe2WTRdu7DDL7Wri8lwJWtqFN4hF8UQ19cK7AppNR8muY7OO4V8WtRta2Ywassgmv39BjGfATtrUQHeFjjxaqjKXFlSlEeKX20yQl7w7LcYFGoXuMXrVVetQzMkNbTBI202HfrBnge1qyrduU9f4jlUez5qLBpK0kWYSkqSfUDPyjbcYepzCxkEDzS1VmN709n2wYJbYPg14OqQn-d5AFZC3dM0VqOhlPs5r~DvStHeaNKiSXMGD79pBMnKiKmezlPSIJkYvox-kVQcLPavs6G~XFaqCy8k7nVzqg__" alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Stage Kit</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg"> Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/c4dc/6584/e7db645d8ea6f937efe2e1014a9e1761?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j~JwMIcuZFuu~d93-lTNScQnJ4vfJ11z9Ia3fx6LwuDnNPY9r~DCYYwrgW-kucDQEJpuWnjeCsBPIlJH6AMzFm9Ccw-2ghMaxUdL7bFT1ptdJfI5dsfxhPQUo4dKztvLNWLt5k~s6SQyojyjkFU5ZbuQJz5aWmspwgMv6Ptus1UH5yBNQdLMAb6pUL0QzfxZyUn-OshPjeGL7F6KNkxuDmC4VgfDPfFptgpGRGLkgBD9yc8SszD27VBAeIgf7mmzi4G1j2BloxFqsvJGJd-2~~Kba1HQs0l-OGQBY9ibu-wWaIZ5rgBOTIhTPmO0IUuQv15BLAfJbNdHiAQCfurO6Q__" alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Green Room</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg py-4">Invite speakers to a private waiting room to meet and prep to go on stage.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/298e/f337/9fc2df50207a3613f8b5722e8fc00e28?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpYWVHfYjFhj~DfPouzSAowoPa-lfO0fkPXwWdP6f7b0kqHcWAivxt0AhwFEPUhC71Og1hiq4ybmseS2l3KAHvn68xO32AU0HfBVj6EUfmSg8PPn~9PDskB2fJycdSlqTBMfETmNePZUWIZqB93cNfYyGSTxx05f6e6yyrkoWBu9SNxleM4h80yNwU88QN3HxaoSWJu2ZnFfTQaNNC3D0c-vlENcp3~0qSb6ZRCBKB5tiXAKliPJrI3JMf8n4Kd6e6Fkfp6J0PDKmNTOfo1obuZ6M2g5SUap8Ur8Ii47Lp3fyiG5APfgfSnrgC3Z4Ezl8C2~UyOBDM6QkprbOi-OJw__" alt="" />
    </div>
</div>
{/* sixth part */}
<div className="flex flex-col lg:flex-row justify-center my-10 items-center gap-6">
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Brand customization</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg">Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/3a2d/c615/5db8fe168e72a3a818e85f1c05d186aa?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ml5Tyh8cqayGuwWnwhsXcRi6JvW55FyjcM9W8prbGpiS2s5FXkyt4yVpA-STbD99Tbc7gdIVNwhSvwaS6EL8P3KCFaBugMYNK5vKmXyI2qP9t6eRvoiGg-m3lpIJBZFrmozfuBP0hrtJXj5ptnDlqLg8E~Tp0McfG4NHz3w~7hlq~DJyrARI2LKP2Z5sAOaN-23DBrh3lHyMbNBKPEtfnVnHp4qJxd8ywCghJW1PUEXjSdEzvQtWvh6-m3p1kvxaWM0jKh9T10DzmWWWlblthOceYl1pRooB0jpZY2FINga1qPLWW-nukJdyxeTXvkyoVl6j0jSxrfaDRRdpqWZwvg__" alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Stage Kit</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg"> Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/1ba0/39a3/380adcb0df4a50daaa4a91103bd8aa0f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fbxJoguN2BnQYIKc-QGCNjzUcQ-KFgATQFVO5sRDM9MUFNCIywB76Ouu53Tuf8~CN~RmpHjmG2lnwDjVqlFICbeMw4deuYIfZbFpQzGkIEKUlB61XGNWcRcRKlkN1rwxd-FmqNETJOCiJdOtGeDi4alt1KoxpZDVJTbbZ6by7JKbJArbiRng5sqXmkJvVJSWzY9Qfx2U2XPrwjjjoyjI11vGxDFoM0gKbtfmPdUIJz~J~PFpI-ttNZfaoFvk7naePBTew2jUyZAx08ECYaoTWxM-mfq3Y~MzsTbNDtNBnlc-kEsOaVHdsQtfc6fxw8JSIsMY9NYJvq4tH0ByweHc7g__" alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Green Room</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg py-4">Invite speakers to a private waiting room to meet and prep to go on stage.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/0fe4/7ac4/ee9a477b73bca9c898a5bc0f18b0958e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQ1x8T3dJmtTCIzB33RNZzYKxFC2L4wMdyEg2deIbmZOprdSDCgVriWAk3RnkTFL9JSHryEXJMKG8alaOoJLRAr~bMW5carVJ8kWT8IYzwlOfQr~K50PEZGVs9KMhhPo5PxjVWGN-vVwyCi-fk-w-9y8JCyG~Mm2nGIaYf~4pZXniIp1l7wJKGzS1q-puudGzQVdunmD3~Pl~nTzvVZ~zDVnFYV0ww4m8gIZAe7mnEGavHhgr0QQXg69XR-9YIAg06f8mXyFZYYyVbU9kPjqfR6CkehlbvChJrlMg6EwakMJ~T1aOEQf5ofAtNKVhwbRT42TFxtqEQAj7D8TeKXzcA__" alt="" />
    </div>
</div>

{/* 7th part */}
<div className="flex lg:flex-row flex-col justify-center my-10 items-center gap-6">
    <div className="w-full mx-auto px=1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Brand customization</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg">Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/ddd0/84ee/0c588cfb3d7d122c5fc4d0e65db03f8e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dmG01zKty0BFeDIkeAh5jJwJkZMJ66IrCQ~ar2xFgkiMp3q9Zxdf1iMfvVOyXMBX1MUTTTWgCVm2yxA5fgKmECriJwzpGgNu0Wr2ailS3Deivn7zI1Rd-f2zzbV9JmGxt5TIGsJ7oIlVy8JnJvSov1Sk4yfoRYfQDjFzpiSixf06qE5YG4Y5eaPRocx1PCSgWQN5sS6dN7NJ8YTFEAm3pkf0tBsdtCCIOB8WLgMUHCTYiMFHS9WqdmdFYRZ2W5WC1hyZQ6QuzBhHefcTKOATs75mTlEXNC4a3sGfhZGmPFfvUrt~fS6Kh3-nAuXxvP4GLWxGKKUFk6DEjIbZ5drwCg__" alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Stage Kit</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg"> Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/14e8/eea2/b876c9789afefba899167470917c3487?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiZuUaiYe23yHOBS9jS6iyfr5spL3DGyU74wYw2vZcb5x16SZtt4OZDNYxrbQYIqswCveXz8qsnRij0qnMqdMtvb1ALPeVFgQzGkjoQN17rCJqKuIaE4Jdwr0MN-FpQf1SI9rqBAOgY46r-DMCZq1m2rrrNkTOaM3~0pb615HJbZsu9IMxbXIaQgEqEqHFWFqtU65h1RcAYW9FRtnL-U3YZa4wBSdBXOQmvqOR37YgaB4n69mz7uNxcC4vTiCwAO1E4is0Xw5zz4Pfj3byv111GH2TZx95HIqmOwdyXc35B0eTY8D1k5~oNyOZUa6F6ixhSK~nQOsQYJyMEFGZG-dg__" alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Green Room</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg py-4">Invite speakers to a private waiting room to meet and prep to go on stage.</p>
        <img className="lg:w-[400px] mx-auto lg:h-[300px] rounded-tl-lg" src="https://s3-alpha-sig.figma.com/img/ed56/244d/9baf7a59dc434c5445a856175a6c1aa0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TuE4zNFK2hMp9a~9EDPf4pffXPGDaJnl3-Sh~M1H8q1FqN61R6UGpJ6tMnOit3BJ8doBToPwVkBSf~IIM-NYaix0Ie9ESFPsbK0vnkAFWL-4TIYrJDHducgH51FTbmr8y6TyX-E14JN8wjN~DNGivdejt6X6x3jSKCRtdM79APj7ehV9QtjxpZWkc4sUXZw09rdlOAOR86EaIsLymdVgG9AZNmANOiJNKbCUEK9CZbgPr-G~hemfinVyYPhvEPLUeXL9p-jA9aLFMNvDpDBYJqVPhmwKwDl-gOwJpWYQSuIwshpbPCVJ1bsnqiaD2jmsRmQr7lVHbselVKZaFFCUgQ__" alt="" />
    </div>
</div>
            </div>
        </div>
    );
};

export default BestProjects;