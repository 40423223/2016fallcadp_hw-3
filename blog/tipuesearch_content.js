var tipuesearch = {"pages":[{"title":"About Bg6","tags":"misc","url":"./pages/about-bg6/","text":"2016Fallcadpb_bg6 成員簡報 組長 40423206 組員 40423214 組員 40423216 組員 40423224 組員 40423226 組員 40423229 2016Fallcadpb_bg6 成員網誌 組長 40423206 組員 40423214 組員 40423216 組員 40423224 組員 40423226 組員 40423229"},{"title":"20161216W14","tags":"Misc","url":"./20161216w14.html","text":"下載delta_printer_v2"},{"title":"20161209W13","tags":"Misc","url":"./20161209w13.html","text":"用SolveSpace把檔案存成html檔,並且更改成http設定,利用嵌入網頁的指令,把html檔案放進網誌裡面 遠端網誌無法更新 近端利用瀏覽器檢查網誌是正常,但是遠端的網誌卻沒有更新,發現推上去的資料出現問題,GitHub還親自寄信給我 The page build failed with the following error: The tag `notebook` on line 13 in `plugin/liquid_tags/test_data/content/test-ipython-notebook-nbformat3.md` is not a recognized Liquid tag. For more information, see https://help.github.com/articles/page-build-failed-unknown-tag-error. For information on troubleshooting Jekyll see: https://help.github.com/articles/troubleshooting-jekyll-builds If you have any questions you can contact us by replying to this email. 從網頁來看我多了一個test_data的資料夾,於是進去到相對的目錄,利用指令把它刪掉就可以順利推到遠端,進行網頁的更新 git rm -r -f plugin/liquid_tags/test_data"},{"title":"20161202W12","tags":"Misc","url":"./20161202w12.html","text":"Cube Strut 組合"},{"title":"20161125W11","tags":"Misc","url":"./20161125w11.html","text":"虎科大36週年校慶"},{"title":"20161118W10","tags":"Misc","url":"./20161118w10.html","text":"有關 Solvespace 機構模擬功能介紹, 與 Python3 及 Brython 程式驗證 Solvespace 平面四連桿機構模擬 路徑圖 將所得到的點座標 .csv 以 Excel 畫圖, 得到: Python3 平面四連桿機構模擬: 接下來利用三角函數推導四連桿機構的運動模擬, 即已知長度 18 公分的連桿以逆時針方向旋轉, 希望求三角形頂點的運動座標. 首先利用 Brython, 讀取 data 目錄中的 4bar_2D.csv 座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"../data/solvespace/4bar_2D.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() Ubuntu 安裝 matplotlib: sudo apt-get install python3-matplotlib import math import time # 利用 matplotlib 程式庫畫出 contour 輪廓 import matplotlib.pyplot as plt class Coord(object): def __init__(self,x,y): self.x = x self.y = y def __sub__(self,other): # This allows you to substract vectors return Coord(self.x-other.x,self.y-other.y) def __repr__(self): # Used to get human readable coordinates when printing return \"Coord(%f,%f)\"%(self.x,self.y) def length(self): # Returns the length of the vector return math.sqrt(self.x**2 + self.y**2) def angle(self): # Returns the vector's angle return math.atan2(self.y,self.x) def normalize(coord): return Coord( coord.x/coord.length(), coord.y/coord.length() ) def perpendicular(coord): # Shifts the angle by pi/2 and calculate the coordinates # using the original vector length return Coord( coord.length()*math.cos(coord.angle()+math.pi/2), coord.length()*math.sin(coord.angle()+math.pi/2) ) # 點類別 class Point(object): # 起始方法 def __init__(self, x, y): self.x = x self.y = y # 加入 Eq 方法 def Eq(self, pt): self.x = pt.x self.y = pt.y # 加入 setPoint 方法 def setPoint(self, px, py): self.x = px self.y = py # 加上 distance(pt) 方法, 計算點到 pt 的距離 def distance(self, pt): self.pt = pt x = self.x - self.pt.x y = self.y - self.pt.y return math.sqrt(x * x + y * y) # Line 類別物件 class Line(object): # 起始方法 def __init__(self, p1, p2): self.p1 = p1 self.p2 = p2 # 直線的第一點, 設為線尾 self.Tail = self.p1 # 直線組成的第二點, 設為線頭 self.Head = self.p2 # 直線的長度屬性 self.length = math.sqrt(math.pow(self.p2.x-self.p1.x, 2)+math.pow(self.p2.y-self.p1.y,2)) # setPP 以指定頭尾座標點來定義直線 def setPP(self, p1, p2): self.p1 = p1 self.p2 = p2 self.Tail = self.p1 self.Head = self.p2 self.length = math.sqrt(math.pow(self.p2.x-self.p1.x, 2)+math.pow(self.p2.y-self.p1.y,2)) # setRT 方法 for Line, 應該已經確定 Tail 點, 然後以 r, t 作為設定 Head 的參考 def setRT(self, r, t): self.r = r self.t = t x = self.r * math.cos(self.t) y = self.r * math.sin(self.t) self.Tail.Eq(self.p1) self.Head.setPoint(self.Tail.x + x,self.Tail.y + y) # getR 方法 for Line def getR(self): # x 分量與 y 分量 x = self.p1.x - self.p2.x y = self.p1.y - self.p2.y return math.sqrt(x * x + y * y) # 根據定義 atan2(y,x), 表示 (x,y) 與 正 x 軸之間的夾角, 介於 pi 與 -pi 間 def getT(self): x = self.p2.x - self.p1.x y = self.p2.y - self.p1.y if (math.fabs(x) < math.pow(10,-100)): if(y < 0.0): return (-math.pi/2) else: return (math.pi/2) else: return math.atan2(y, x) # setTail 方法 for Line def setTail(self, pt): self.pt = pt self.Tail.Eq(pt) self.Head.setPoint(self.pt.x + self.x, self.pt.y + self.y) # getHead 方法 for Line def getHead(self): return self.Head def getTail(self): return self.Tail class Link(Line): def __init__(self, p1, p2): self.p1 = p1 self.p2 = p2 self.length = math.sqrt(math.pow((self.p2.x - self.p1.x), 2) + math.pow((self.p2.y - self.p1.y), 2)) class Triangle(object): def __init__(self, p1, p2, p3): self.p1 = p1 self.p2 = p2 self.p3 = p3 def getLenp3(self): p1 = self.p1 ret = p1.distance(self.p2) return ret def getLenp1(self): p2 = self.p2 ret = p2.distance(self.p3) return ret def getLenp2(self): p1 = self.p1 ret = p1.distance(self.p3) return ret # 角度 def getAp1(self): ret = math.acos(((self.getLenp2() * self.getLenp2() + self.getLenp3() * self.getLenp3()) - self.getLenp1() * self.getLenp1()) / (2* self.getLenp2() * self.getLenp3())) return ret def getAp2(self): ret =math.acos(((self.getLenp1() * self.getLenp1() + self.getLenp3() * self.getLenp3()) - self.getLenp2() * self.getLenp2()) / (2* self.getLenp1() * self.getLenp3())) return ret def getAp3(self): ret = math.acos(((self.getLenp1() * self.getLenp1() + self.getLenp2() * self.getLenp2()) - self.getLenp3() * self.getLenp3()) / (2* self.getLenp1() * self.getLenp2())) return ret # ends Triangle def # 透過三個邊長定義三角形 def setSSS(self, lenp3, lenp1, lenp2): self.lenp3 = lenp3 self.lenp1 = lenp1 self.lenp2 = lenp2 self.ap1 = math.acos(((self.lenp2 * self.lenp2 + self.lenp3 * self.lenp3) - self.lenp1 * self.lenp1) / (2* self.lenp2 * self.lenp3)) self.ap2 = math.acos(((self.lenp1 * self.lenp1 + self.lenp3 * self.lenp3) - self.lenp2 * self.lenp2) / (2* self.lenp1 * self.lenp3)) self.ap3 = math.acos(((self.lenp1 * self.lenp1 + self.lenp2 * self.lenp2) - self.lenp3 * self.lenp3) / (2* self.lenp1 * self.lenp2)) # 透過兩個邊長與夾角定義三角形 def setSAS(self, lenp3, ap2, lenp1): self.lenp3 = lenp3 self.ap2 = ap2 self.lenp1 = lenp1 self.lenp2 = math.sqrt((self.lenp3 * self.lenp3 + self.lenp1 * self.lenp1) - 2* self.lenp3 * self.lenp1 * math.cos(self.ap2)) #等於 SSS(AB, BC, CA) def setSaSS(self, lenp2, lenp3, lenp1): self.lenp2 = lenp2 self.lenp3 = lenp3 self.lenp1 = lenp1 if(self.lenp1 > (self.lenp2 + self.lenp3)): #CAB 夾角為 180 度, 三點共線且 A 介於 BC 之間 ret = math.pi else : # CAB 夾角為 0, 三點共線且 A 不在 BC 之間 if((self.lenp1 < (self.lenp2 - self.lenp3)) or (self.lenp1 < (self.lenp3 - self.lenp2))): ret = 0.0 else : # 透過餘絃定理求出夾角 CAB ret = math.acos(((self.lenp2 * self.lenp2 + self.lenp3 * self.lenp3) - self.lenp1 * self.lenp1) / (2 * self.lenp2 * self.lenp3)) return ret # 取得三角形的三個邊長值 def getSSS(self): temp = [] temp.append( self.getLenp1() ) temp.append( self.getLenp2() ) temp.append( self.getLenp3() ) return temp # 取得三角形的三個角度值 def getAAA(self): temp = [] temp.append( self.getAp1() ) temp.append( self.getAp2() ) temp.append( self.getAp3() ) return temp # 取得三角形的三個角度與三個邊長 def getASASAS(self): temp = [] temp.append(self.getAp1()) temp.append(self.getLenp1()) temp.append(self.getAp2()) temp.append(self.getLenp2()) temp.append(self.getAp3()) temp.append(self.getLenp3()) return temp #2P 2L return mid P def setPPSS(self, p1, p3, lenp1, lenp3): temp = [] self.p1 = p1 self.p3 = p3 self.lenp1 = lenp1 self.lenp3 = lenp3 #bp3 is the angle beside p3 point, cp3 is the angle for line23, p2 is the output line31 = Line(p3, p1) self.lenp2 = line31.getR() #self.lenp2 = self.p3.distance(self.p1) #這裡是求角3 ap3 = math.acos(((self.lenp1 * self.lenp1 + self.lenp2 * self.lenp2) - self.lenp3 * self.lenp3) / (2 * self.lenp1 * self.lenp2)) #ap3 = math.acos(((self.lenp1 * self.lenp1 + self.lenp3 * self.lenp3) - self.lenp2 * self.lenp2) / (2 * self.lenp1 * self.lenp3)) bp3 = line31.getT() cp3 = bp3 - ap3 temp.append(p3.x + self.lenp1*math.cos(cp3))#p2.x temp.append(p3.y + self.lenp1*math.sin(cp3))#p2.y return temp # 以上為相關函式物件的定義區 # 全域變數 midpt = Point(0, 0) tippt = Point(0, 0) contour = [] # 幾何位置輸入變數 x=10 y=10 r=10 # 其他輸入變數 theta = 0 degree = math.pi/180.0 dx = 2 dy = 4 #set p1.p2.p3.p4 position p1 = Point(150,100) p2 = Point(150,200) p3 = Point(300,300) p4 = Point(350,100) #create links line1 = Link(p1,p2) line2 = Link(p2,p3) line3 = Link(p3,p4) line4 = Link(p1,p4) line5 = Link(p2,p4) link2_len = p2.distance(p3) link3_len = p3.distance(p4) triangle1 = Triangle(p1,p2,p4) triangle2 = Triangle(p2,p3,p4) def simulate(): global theta, midpt, oldpt theta += dx p2.x = p1.x + line1.length*math.cos(theta*degree) p2.y = p1.y - line1.length*math.sin(theta*degree) p3.x, p3.y = triangle2.setPPSS(p2,p4,link2_len,link3_len) # 計算垂直單位向量 a = Coord(p3.x, p3.y) b = Coord(p2.x, p2.y) normal = perpendicular(normalize(a-b)) midpt.x = (p2.x + p3.x)/2 midpt.y = (p2.y + p3.y)/2 tippt.x = midpt.x + 150*normal.x tippt.y = midpt.y + 150*normal.y # 印出座標點 #print(round(tippt.x, 2), round(tippt.y, 2)) if theta < 360: contour.append((round(tippt.x, 2), round(tippt.y, 2))) for i in range(180): simulate() # 印出 contour #print(contour) x_list = [x for (x, y) in contour] y_list = [y for (x, y) in contour] plt.xlabel('x coordinate') plt.ylabel('y coordinate') plt.plot(x_list, y_list) plt.show() 以下將上述四連桿模擬程式移到近端的 Jupyter 平台中執行: 以下將上述四連桿模擬程式移到 Jupyterhub 平台中執行: 以下再利用 Brython 繪出四連桿模擬特定點的掃掠圖: 以下利用 Brython 動態畫出四連桿機構模擬圖: 以下利用 Solvespace 繪圖法進行相同機構模擬驗證: 以下再利用 Solvespace 程式 API 方法進行四連桿模擬驗證: 以下以 Delta 3D 印表機印出連桿零件, 組立後以步進馬達驅動進行驗證: 以下利用伸縮連桿設計, 以 Delta 3D 印表機印出連桿零件, 組立後以步進馬達驅動進行驗證: 請以上述相同流程, 模擬並實作驗證 多連桿機構 的作動."},{"title":"20161111W9","tags":"Misc","url":"./20161111w9.html","text":"檢查自己的連結是否正確"},{"title":"20161104W8","tags":"Misc","url":"./20161104w8.html","text":"期中課程評量系統"},{"title":"20161028W7","tags":"Misc","url":"./20161028w7.html","text":"使用Trace Point計算路徑 路徑圖 解決子模組設定的問題 把以下多餘的子模組刪掉 [submodule \"2016fallcadp_hw\"] path = 2016fallcadp_hw url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages 更改後為以下的內容 [submodule \"40423206\"] path = 40423206 url = https://github.com/40423206/2016fallcadp_hw.git branch = gh-pages [submodule \"40423224\"] path = 40423224 url = https://github.com/40423224/2016fallcadp_hw.git branch = gh-pages [submodule \"40423226\"] path = 40423226 url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages [submodule \"40423229\"] path = 40423229 url = https://github.com/40423229/2016fallcadp_hw.git branch = gh-pages [submodule \"40423214\"] path = 40423214 url = https://github.com/40423214/2016fallcadp_hw.git branch = gh-pages [submodule \"40423216\"] path = 40423216 url = https://github.com/40423216/2016fallcadp_hw.git branch = gh-pages"},{"title":"20161021W6","tags":"Misc","url":"./20161021w6.html","text":"解決子模組在對應上的問題 因為之前的2016fallcadp_hw倉儲少複製了一些東西,刪除舊的倉儲後,重新做一個和之前倉儲同名的2016fallcadp_hw倉儲,但是在小組倉儲所連結的子模組,抓不到新倉儲連結,所以我們需要重新加入一次組員倉儲的資料 以為只要再輸入一次指令就可以讓程式抓最新的子模組近來 Y:\\tmp\\2016fallcadp_bg6>git submodule add -b gh-pages https://github.com/40423226/2016fallcadp_hw.git 40423226 '40423226' already exists in the index 但是程式告訴我們40423226的子模組已經在裡面,所以在試著用git rm 40423226 -f 來刪除存放該子模組資料的資料夾,然後再git submodule add的一次組員倉儲的資料 Y:\\tmp\\2016fallcadp_bg6>git submodule add -b gh-pages https://github.com/40423226/2016fallcadp_hw.git 40423226 A git directory for '40423226' is found locally with remote(s): origin https://github.com/40423226/2016fallcadp_hw.git If you want to reuse this local git directory instead of cloning again from https://github.com/40423226/2016fallcadp_hw.git use the '--force' option. If the local git directory is not the correct repo or you are unsure what this means choose another name with the '--name' option. 程式告訴我們還有資料沒刪除乾淨,於是我們再執行一次刪除的指令 Y:\\tmp\\2016fallcadp_bg6>git rm 40423226 -f fatal: pathspec '40423226' did not match any files 然而程式說找不到任何有關該名稱的文件資料,後來我們發現submodule內的設定並沒有也因此刪除,要刪除submodule的設定有兩個方法 解決方法一 從SciTE打開,在2016fallcadp_bg6資料夾內的.gitmodules檔案,把該組員的子模組設定刪除後就可以存檔 [submodule \"40423206\"] path = 40423206 url = https://github.com/40423206/2016fallcadp_hw.git branch = gh-pages [submodule \"40423224\"] path = 40423224 url = https://github.com/40423224/2016fallcadp_hw.git branch = gh-pages [submodule \"2016fallcadp_hw\"] path = 2016fallcadp_hw url = https://github.com/40423226/2016fallcadp_hw.git branch = gh-pages [submodule \"40423229\"] path = 40423229 url = https://github.com/40423229/2016fallcadp_hw.git branch = gh-pages [submodule \"40423214\"] path = 40423214 url = https://github.com/40423214/2016fallcadp_hw.git branch = gh-pages [submodule \"40423216\"] path = 40423216 url = https://github.com/40423216/2016fallcadp_hw.git branch = gh-pages 如果有打下面的指令,把各組員子模組的資料抓近來,記得要把2016fallcadp_bg6\\.git\\modules裡該組員的隱藏資料夾刪掉 git submodule update --init --recursive 就可以重新執行指令,把組員的子模組加進來 git submodule add -b gh-pages https://github.com/40423226/2016fallcadp_hw.git 40423226 解決方法二 直接依序執行以下的指令 git submodule deinit asubmodule git rm asubmodule # Note: asubmodule (no trailing slash) # or, if you want to leave it in your working tree git rm --cached asubmodule 但是在2016fallcadp_bg6\\.git\\modules裡的隱藏資料夾,還是需要自己動手刪除"},{"title":"20161014W5","tags":"Misc","url":"./20161014w5.html","text":"初步認識SolveSpace"},{"title":"20161007W4","tags":"Misc","url":"./20161007w4.html","text":"設定使用者資料,讓可攜程式更方便 用2016fallcadp_bg6的名稱,建立小組倉儲"},{"title":"20160930W3","tags":"Misc","url":"./20160930w3.html","text":"複製網誌和簡報的設定檔到2016fallcadp_hw的倉儲 更改2016fallcadp_hw的README.md檔案 簡報: https://40423226.github.io/2016fallcadp_hw 網址: https://40423226.github.io/2016fallcadp_hw/blog/ 解決近端設定代理主機的問題 每次上課須執行以下指令 git config --global http.proxy http://proxy.mde.tw:3128 git config --global https.proxy http://proxy.mde.tw:3128 輸入完之後出現了這個問題 warning: http.proxy has multiple values error: cannot overwrite multiple values with a single value Use a regexp, --add or --replace-all to change http.proxy. 發現在Y:\\home的.gitconfig檔案出現問題,從SciTE打開.gitconfig [http] proxy = proxy = proxy = proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423226@gm.nfu.edu.tw name = 40423226 更正後儲存 [http] proxy = http://proxy.mde.tw:3128 [https] proxy = http://proxy.mde.tw:3128 [user] email = 40423226@gm.nfu.edu.tw name = 40423226"},{"title":"20160923W2","tags":"Misc","url":"./20160923w2.html","text":"建立40423226.github.io名稱的倉儲 把分支的預設值改為gh-pages"},{"title":"20160916W1","tags":"Misc","url":"./20160916w1.html","text":"利用中秋連假複習之前學過的指令 切換到2016fallcadp_hw的分支 cd 分支名稱 (例如:cd 2016fallcadp_hw) 回到上一個分支 cd .. 會新建一個40423226的資料夾,並把遠端資料存在裡面 git clone 倉儲網址 分支名稱 (例如:git clone https://github.com/40423226/2016fallcadp_hw.git 40423226) 檢查分支 git branch 建立一個gh-pages名稱的分支 git branch 分支名稱 (例如:git branch gh-pages) 切換到指定的gh-pages分支 git checkout 分支名稱 (例如:git checkout gh-pages) git add -A git commit -m\" 改版內容 \" (例如:git commit -m\"yen.leo update\") 推送進端資料到遠端,並且指定推送到gh-pages的分支 git push origin 分支名稱 (例如:git push origin gh-pages) git pull 收尋該檔案名稱,並逐一確認是否刪除 git rm 檔案名稱 回到之前072e3af的版本資料 git reset --hard 版本代碼 (例如:git reset --hard 072e3af) 直接刪除所有該檔案名稱的檔案 git rm 檔案名稱 -f"},{"title":"Other","tags":"Misc","url":"./other.html","text":"使用環境設定 git config --global http.proxy http://proxy.mde.tw:3128 git config --global https.proxy http://proxy.mde.tw:3128 git config --global user.email \"40423226@gm.nfu.edu.tw\" git config --global user.name \"40423226\" 子模組 用40423226的名稱把https://github.com/40423226/2016fallcadp_hw的倉儲加入為子模組 git submodule add -b gh-pages 子模組網址 子模組名稱 (例如:git submodule add -b gh-pages https://github.com/40423226/2016fallcadp_hw 40423226) 抓對應子模組的版本 git submodule update --init --recursive 更新子模組的資料,甚至更新子模組裡子模組的資料 git submodule foreach \"(git checkout gh-pages; git pull)&\" HTML文字語法 h1 h2 h3 h4 h5 h6 <h1>h1</h1> <h2>h2</h2> <h3>h3</h3> <h4>h4</h4> <h5>h5</h5> <h6>h6</h6> 置中 <p align=\"center\">置中</p> 靠右 <p align=\"right\">靠右</p> 粗體 <b>粗體</b> 斜體 <i>斜體</i> 底線 <u>底線</u>"},{"title":"Onshape","tags":"Misc","url":"./onshape.html","text":"Onshape"},{"title":"SolveSpace","tags":"Misc","url":"./solvespace.html","text":"SolveSpace SolveSpace 2D 2D成品 SolveSpace 3D 3D成品 Linkages 尺寸 路徑 Python3 平面四連桿機構模擬 from browser import document as doc from browser import html import math</p> <h1>準備繪圖畫布</h1> <p>canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\")</p> <p>fourbar_data = open(\"../data/solvespace/linkages.csv\").read() fourbar_list = fourbar_data.splitlines()</p> <h1>container1 &lt;= fourbar_list[0]</h1> <h1>以下可以利用 ctx 物件進行畫圖</h1> <h1>先畫一條直線</h1> <p>ctx.beginPath()</p> <h1>設定線的寬度為 1 個單位</h1> <p>ctx.lineWidth = 1</p> <h1>利用 transform 將 y 座標反轉, 且 offset canvas.height</h1> <h1>(X scale, X skew, Y skew, Y scale, X offset, Y offset)</h1> <h1>配合圖形位置進行座標轉換</h1> <p>ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)</p> <h1>畫出 x 與 y 座標線</h1> <h1>各座標值放大 8 倍</h1> <p>ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30<em>ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])</em>ratio, float(start_point[1])<em>ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 &lt;= str(count) + \":\" + point[0] + \",\" + point[1] #container1 &lt;= html.BR() ctx.lineTo(float(point[0])</em>ratio, float(point[1])*ratio)</p> <h1>設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值</h1> <p>ctx.strokeStyle = \"blue\"</p> <h1>實際執行畫線</h1> <p>ctx.stroke() ctx.closePath() 用SolveSpace把檔案存成html檔,並且更改成http設定,利用嵌入網頁的指令,把html檔案放進網誌裡面 <iframe src=\" 檔案的相對位置 \" width=\"800\" height=\"600\"></iframe>"}]};