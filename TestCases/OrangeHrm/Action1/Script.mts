Login()

Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("xpath:=//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input").Set "Admin" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("xpath:=//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input").SetSecure "63ebb165b3920dbce31152ebd88483169bc0043639a5" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("xpath:=//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button").Click @@ script infofile_;_ZIP::ssf3.xml_;_
