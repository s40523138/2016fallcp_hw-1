var tipuesearch = {"pages":[{"title":"About","tags":"misc","text":"2016Fall 修課成員網誌","url":"./pages/about/"},{"title":"W17","tags":"Course","text":"2017 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"onebar\"] ctx = canvas.getContext(\"2d\") # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (200, 200) 座標點 ctx.moveTo(200, 200) # 然後畫直線到 200, 300) 座標點 ctx.lineTo(200, 300) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() circle(200,200,5)","url":"./w17.html"},{"title":"W16 新年快樂","tags":"Course","text":"2017年元旦快樂 首先了解random亂數模組的用法 然後利用random模組產生一個介於1-100的整數,列印在網頁上 window.onload=function(){ brython(1); } from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1,100) #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"~\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 產生整數亂數 from browser import document from browser import html import random print_location = document[\"newyear\"] def lottery(e): num_list = random.sample(list(range(1, 50)), 6) for i in range(6): print_location <= num_list[i] + html.BR() print_location <= \"恭喜中獎!\" + html.BR() document[\"but2\"].bind(\"click\", lottery) 恭喜發財 猜數字 from browser import document from browser import html import random id3 = document[\"id3\"] def guess(ev): # 清除 id3 中的內容 id3.clear() id3 <= \"開始玩猜數字遊戲\" + html.BR() 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: #print(\"太大了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"太大了，再猜一次 :)加油\" + html.BR() else: #print(\"太小了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"太小了，再猜一次 :)加油\" + html.BR() 你猜的數字 = int(input(\"請輸入您所猜 1~100 間的整數:\")) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id3 <= \"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\" document[\"but3\"].bind(\"click\", guess) 玩猜數字遊戲 from browser import document from browser import html import random id4 = document[\"id4\"] def autoguess(ev): 執行次數 = 100 總猜測次數 = 0 for i in range(執行次數): id4 <= \"第\" + str(i+1) + \"次玩:\" + html.BR() 下限 = 1 上限 = 100 標準答案 = random.randint(下限, 上限) pc猜的數字 = random.randint(下限, 上限) #print(標準答案, pc猜的數字) #integer int() #string str() #float float() #你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 = 1 while 標準答案 != pc猜的數字: if 標準答案 < pc猜的數字: #print(\"太大了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 - 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太大了!\" + html.BR() 上限 = pc猜的數字 - 1 else: #print(\"太小了，再猜一次 :)加油\") # 因此已經確定\"pc猜的數字\"不是答案, 因此 + 1 id4 <= \"電腦猜的數字:\" + str(pc猜的數字) + \" 太小了!\" + html.BR() 下限 = pc猜的數字 + 1 #pc猜的數字 = int(input(\"請輸入您所猜的整數:\")) pc猜的數字 = random.randint(下限, 上限) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id4 <= \"電腦猜對了, 答案為: \" + str(標準答案) + \", 總共猜了 \"+ str(猜測次數) + \"次\" + html.BR() 總猜測次數 += 猜測次數 平均猜測次數 = int(總猜測次數/執行次數) #print(\"平均次數\", 平均猜測次數) id4 <= \"平均次數: \" + str(平均猜測次數) document[\"but4\"].bind(\"click\", autoguess) 利用程式玩猜數字","url":"./w16-xin-nian-kuai-le.html"},{"title":"CP W15 練習","tags":"Course","text":"window.onload=function(){ brython(1); } from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa","url":"./cp-w15-lian-xi.html"},{"title":"W14 練習","tags":"Misc","text":"以下為第十四週開始的城市練習,要利用 http://mde.tw/2016fallcp/course/Python3Programs.txt 要整理Brython 的用法. window.onload=function(){ brython(1); } from browser import document as doc container = doc['ex1'] container<=\"W14練習\" from browser import document as doc from browser import html container = doc['ex2'] mystring = input(\"要印出什麼字串?\") mynum = input(\"要印幾次?\") for i in range(int(mynum)): #container<=\"W14練習-2\"+html.BR() container<=mystring+html.BR()","url":"./w14-lian-xi.html"},{"title":"W13  練習-2","tags":"Course","text":"將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython 練習:編寫一個可以將適用者輸入的攝氏溫度,轉為華氏溫度 window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['temperature'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5+32 output_string = \"攝氏\" +str(cdegree) + \"度=華氏\" +str(fdegree) + \"度\" container <= output_string 開始進行範例分配 接受使用者輸入 利用aler()顯示結果 直接列印結果","url":"./w13-lian-xi-2.html"},{"title":"2016Fall","tags":"Misc","text":"window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc[\"container\"] mvstring = \"\" num = input(\"請輸入重複執行次數\") #for i in range(1,11): for i in range(1,int/num)+1): mystring += str(i) + \":hello mde\" +html.BR() container <= mystring from browser import document as doc","url":"./2016fall.html"},{"title":"W13  練習-1","tags":"Course","text":"將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1,11): for i in range(1,int(num)+1): mystring += str(i)+ \":hallo mde\" +html.BR() container <= mystring 開始進行範例分配 接受使用者輸入 利用aler()顯示結果 直接列印結果","url":"./w13-lian-xi-1.html"},{"title":"計算機程式 W14 範例整理","tags":"Course","text":"本週的學習重點在導入 Leo Editor @clean 節點指令的用法, 利用子節點管理各章節的範例, 逐一將程式改寫為 Brython 格式後, 直接在瀏覽器中執行. 讓學員了解使用階層式架構管理資料的便利性. 以下為 http://mde.tw/2016fallcp/course/Python3Programs.txt 中的 ch01 綜合範例, 其餘範例位於本 Leo Editor 專案檔中的 \"Python3 程式範例\" 節點, 請各組一一將範例程式碼與執行結果, 放入各學員的課程網誌中. 本課程 W15 - W18 週將利用 introduction_to_prog_python3_2012.pdf 與 python_for_everybody_2015.pdf 中有關物件導向的說明, 並且配合 https://github.com/mdecourse/webgame 倉儲中的 Leo Editor 專案, 希望各組能夠了解利用 Python3 與 Brython 語法處理 靜態圖檔 、 動態圖檔 與 網際遊戲 的運作原理, 順利完成各組的期末報告. window.onload=function(){ brython(1); } from browser import document from browser import alert ''' # 利用 input() 取得使用者輸入, 然後進行資料處理或運算後, 列出結果 #01-01.py print (\"Hello World!\") #01-02.py thetext = input(\"Enter some text \") print (\"This is what you entered:\") print (thetext) #01-03.py # Note that \\n within quote marks forces a new line to be printed thetext = input(\"Enter some text\\n\") print (\"This is what you entered:\") print (thetext) #01-04.py prompt = \"Enter a some text \" thetext = input(prompt) print (\"This is what you entered:\") print (thetext) ''' def get_input(ev): the_input= input(\"上課不會滑手機\") alert(\"上課不會滑手機:\"+str(the_input)) document['ch01'].bind('click',get_input) 40523137 from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 取輸入後, 列印出來 from browser import document as doc from browser import html container = doc['container'] def numPrint(ev): mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1, 11): for i in range(1, int(num)+1): mystring += str(i) + \": hello mde\" + html.BR() container <= mystring doc['w13'].bind('click',numPrint) 取重複執行次數後, 列印出來 from browser import document as doc from browser import html # 利用 document 根據 div 標註 id 設為 container 變數 container = doc['container'] # 因為此函式與滑鼠互動, 需要 event 當作輸入 def numPrint(ev): mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1, 11): for i in range(1, int(num)+1): mystring += str(i) + \": hello mde\" + html.BR() container <= mystring # 與 id 為 'w13' 對應的 button 綁定, 且滑鼠 click 後, 呼叫 numPrint 函式執行 doc['w13'].bind('click',numPrint) 取重複執行次數後, 列印出來 開始進行範例分類: 接受使用者輸入, 然後利用 int() 或 str() 或 float() 函式轉為題目所需的資料型別 input() 取回的資料為字串, 經過 int() 可以轉為整數 若 num 變數內容為整數, 經過 str() 可以轉為字串, 然後再與其他字串進行結合後列印 練習: 編寫一個可以將使用者輸入的攝氏溫度, 轉為華氏溫度. from browser import document as doc from browser import html # 利用 document 根據 div 標註 id 設為 container 變數 container = doc['temperature'] # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(event): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" + html.BR() container <= output_string # 與 id 為 'w13-1' 對應的 button 綁定, 且滑鼠 click 後, 呼叫 convTemp 函式執行 doc['w13-1'].bind('click',convTemp) 取攝氏溫度, 轉為華氏溫度 from browser import document as doc from browser import html # 利用 document 根據 div 標註 id 設為 container 變數 container = doc['temperature'] # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(event): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" + html.BR() container <= output_string # 與 id 為 'w13-1' 對應的 button 綁定, 且滑鼠 click 後, 呼叫 convTemp 函式執行 doc['w13-1'].bind('click',convTemp) 取攝氏溫度, 轉為華氏溫度 import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) Filename: .txt Run Output 清除 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 - 簡單的 for 迴圈範例 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 - input() 與函式定義進行溫度轉換 from browser import document as doc import script1 def ex3(ev): script1.editor.setValue('''# this is a comment import math # imports make code from other modules available # code blocks are initiated by a trailing colon followed by indented lines class Circle: # define a class def __init__(self, radius): # constructor with parameter radius self.radius = radius # store the parameter in a class variable def get_area(self): # define a function that belongs to the class return math.pi*self.radius*self.radius # code that is not in a class is executed immediately for i in range(1, 10): # bitwise operation - https://wiki.python.org/moin/BitwiseOperators if (i & 1) == 0: continue circle = Circle(i) # create an instance print(\"A circle with radius {0} has area {1:0.2f}\".format( i, circle.get_area() # `print` writes output to the console )) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex3'].bind('click',ex3) ex3 - 基本的物件導向範例 from browser import document as doc import script1 def ex4(ev): script1.editor.setValue('''#ex4 from browser.local_storage import storage # 列出 py_src 對應的儲存內容 print(storage[\"py_src\"]) # 接著將要使用 FileSaver.js 將內容存在 local 區 # https://github.com/eligrey/FileSaver.js/ # https://eligrey.com/demos/FileSaver.js/ ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex4'].bind('click',ex4) ex4 - 將程式在近端存檔 from browser import document from browser import alert","url":"./ji-suan-ji-cheng-shi-w14-fan-li-zheng-li.html"},{"title":"W12 Brython 繪圖範例","tags":"Course","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) #canvasText(100, 80,20,\"A\", \"b\", \"\", \"black\", ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) #canvasText(100, 80,20,\"A\", \"b\", \"\", \"black\", ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1","url":"./w12-brython-hui-tu-fan-li.html"},{"title":"W10 Brython 繪圖範例","tags":"Course","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 inc=10 for i in range(10): ctx.lineWidth = 1 ctx.moveTo(100+i*inc, 100) ctx.lineTo(100+i*inc, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 inc=10 for i in range(10): ctx.lineWidth = 1 ctx.moveTo(100+i*inc, 100) ctx.lineTo(100+i*inc, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./w10-brython-hui-tu-fan-li.html"},{"title":"2016Fall 程式練習題","tags":"Misc","text":"已知截至第六週 2016fallcpa 的分組資料位於倉儲中的 w6_group.txt , 而從學校修課系統下載的修課人員名條則為 w6_list.txt , 請各組著手練習, 找出尚未納入分組的人員名單, 並研擬如何處置上課一個半月卻尚未進入情況的學員? 以下利用 Brython 讀取位於倉儲中的 w6_list.txt 與 w6_group.txt 資料檔案. 表示學校教務系統中, 修 2016fallcpa 的學員名單為: window.onload=function(){ brython(1); } from browser import document, html container = document['container'] data = open(\"./../w6_list.txt\").read() container <= data 而截至 w6, 納入分組名單中的學員有: from browser import document, html container2 = document['container2'] data2 = open(\"./../w6_group.txt\").read() container2 <= data2 現在, 誰能夠幫我們找出至今尚未納入分組名單中的學員, 共有那些人？ from browser import document, html # 從 id=script1 程式區段取 data 變數 from script1 import data container3 = document['container3'] data3 = open(\"./../w6_group.txt\").read() group = data3.splitlines() # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = [] for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\") # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #container3 <= len(sline) #container3 <= html.BR() #container3 <= len(result_g) registered = data.splitlines()[:-1] # 設法找出至今尚未分組的學員學號 not_in_group = [c for c in registered if c not in result_g] #container3 <= len(registered) -len(result_g) n = 1 for i in not_in_group: container3 <= \"第\"+str(n)+\"位: \"+ str(i) n = n + 1 container3 <= html.BR()","url":"./2016fall-cheng-shi-lian-xi-ti.html"},{"title":"2016Fall 機械設計主題教學","tags":"Misc","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 計算機程式 從 Python3 的 print(), input(), 變數命名到關鍵字, 可以透過簡單的單位轉換問題進行練習: 首先我們舉 Python3 程式執行的三個地方: 在單機 Windows 10 操作系統環境下利用可攜程式系統執行 利用遠端桌面或 X-Windows, 在近端利用遠端的電腦硬體與操作系統執行 在近端利用瀏覽器執行 單機執行: 按下 start.bat 後, 系統就會配置好 git 與 Python3 的程式環境, 可以在命令列中直接用互動的方式執行 Python3 程式, 也可以在 SciTE 編輯器中, 透過設定按下 go 之後執行 所牽涉的問題: 可攜程式環境如何建立? Python3 執行環境如何配置? 執行的 Python3 是那一個版本? 希望在 SciTE 中直接執行 Python3 程式, 該如何設定? 能不能在 Leo Editor 中執行 Python3 程式, 為何要這樣做? 近端連到遠端執行: 以 Remote Desktop, 連接到遠端的電腦畫面中執行可攜程式系統中的 Python3 程式, 基本架構與流程與近端單機執行相同. 利用 putty 與 Xming, 連線到支援 X-Windows 協定的電腦, 將遠端的視窗搬到近端執行, 但仍使用遠端電腦的硬體與軟體支援. 在瀏覽器中執行: 由於網際瀏覽器環境所整合的工具愈來愈多, 就連原本只能在單機執行的 SolidWorks, 也已經有初步成型的 OnShape 可以取代部份的零組件設計分析工作, 因此本課程以 Brython 為例, 說明如何在瀏覽器中執行 Python3 程式. 所牽涉問題: 如何設置? Brython Console 所有近端能執行的程式都能利用瀏覽器執行? 以下使用 Brython 標準程式庫執行 Python3 繪圖程式: window.onload=function(){ brython(1); } # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc # 導入數學模組 import math # 產生各小球的亂數速度用 import random # 導入 browser 中的計時器, 建立動畫用 import browser.timer # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 取畫布的寬與高度 width = canvas.width height = canvas.height n = 20 # 已知數列內容個數, 先分別與 None 對應 x = [None]*n y = [None]*n vy = [None]*n vx = [None]*n # 重力加速度, Y 方向向下為正 g = 0.05 # 空氣的黏滯阻尼係數 cor = 0.7 # 球的彈力係數 fr = 0.95 # 球的半徑 r = 5 for i in range(n): x[i] = 300 y[i] = 100 # random.random() 將會產生介於 0 與 1 的浮點亂數 vx[i] = 2*(random.random()-.5) vy[i] = 2*(random.random()-.5) # 更新第 i 球 Y 座標的運算邏輯 def updateY(i): if ((y[i]+r) < height): #y = height vy[i] += g else: vy[i] = -vy[i]*cor vx[i] *= fr y[i] += vy[i] if ((y[i]+r) > height): y[i] = height-r # 更新第 i 球 X 座標的運算邏輯 def updateX(i): if ((x[i]+r) >= width or (x[i]-r) <= 0): vx[i] = -vx[i]*cor x[i] += vx[i] if ((x[i]+r) > width): x[i] = width-r elif ((x[i]-r) < 0): x[i] = r # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 寫字函式 def text(s): ctx.fillStyle = \"#ff0000\" ctx.font = \"30px sans-serif\" ctx.textBaseline = \"bottom\" ctx.fillText(s,0,height) # 每隔特定時間, 進行動畫繪製 def animate(): # 刷新畫布 ctx.clearRect(0, 0, width, height) # 逐一重新繪製小球 ctx.fillStyle = \"#000000\" for i in range(n): updateY(i) updateX(i) circle(x[i],y[i],r) text(\"Click me!\") # 畫布點擊後執行的函式 def on_canvas_click(ev): browser.timer.set_interval(animate,0) # 只要使用者點擊在畫布上任何地方, 即執行 on_canvas_click 函式 canvas.bind('click', on_canvas_click, False) 上面小球自由落體的繪圖程式: <canvas id=\"plotarea\" width=\"600\" height=\"400\"></canvas> <script type=\"text/python3\"> # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc # 導入數學模組 import math # 產生各小球的亂數速度用 import random # 導入 browser 中的計時器, 建立動畫用 import browser.timer # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 取畫布的寬與高度 width = canvas.width height = canvas.height n = 20 # 已知數列內容個數, 先分別與 None 對應 x = [None]*n y = [None]*n vy = [None]*n vx = [None]*n # 重力加速度, Y 方向向下為正 g = 0.05 # 空氣的黏滯阻尼係數 cor = 0.7 # 球的彈力係數 fr = 0.95 # 球的半徑 r = 5 for i in range(n): x[i] = 300 y[i] = 100 # random.random() 將會產生介於 0 與 1 的浮點亂數 vx[i] = 2*(random.random()-.5) vy[i] = 2*(random.random()-.5) # 更新第 i 球 Y 座標的運算邏輯 def updateY(i): if ((y[i]+r) < height): #y = height vy[i] += g else: vy[i] = -vy[i]*cor vx[i] *= fr y[i] += vy[i] if ((y[i]+r) > height): y[i] = height-r # 更新第 i 球 X 座標的運算邏輯 def updateX(i): if ((x[i]+r) >= width or (x[i]-r) <= 0): vx[i] = -vx[i]*cor x[i] += vx[i] if ((x[i]+r) > width): x[i] = width-r elif ((x[i]-r) < 0): x[i] = r # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 寫字函式 def text(s): ctx.fillStyle = \"#ff0000\" ctx.font = \"30px sans-serif\" ctx.textBaseline = \"bottom\" ctx.fillText(s,0,height) # 每隔特定時間, 進行動畫繪製 def animate(): # 刷新畫布 ctx.clearRect(0, 0, width, height) # 逐一重新繪製小球 ctx.fillStyle = \"#000000\" for i in range(n): updateY(i) updateX(i) circle(x[i],y[i],r) text(\"Click me!\") # 畫布點擊後執行的函式 def on_canvas_click(ev): browser.timer.set_interval(animate,0) # 只要使用者點擊在畫布上任何地方, 即執行 on_canvas_click 函式 canvas.bind('click', on_canvas_click, False) </script> 繪製日本國旗: 步驟1, 先能畫一條線: <canvas id=\"japanflag1\" width=\"600\" height=\"250\"></canvas> <script type=\"text/python3\"> from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() </script> from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 接著畫四條直線: <canvas id=\"japanflag2\" width=\"600\" height=\"400\"></canvas> <script type=\"text/python\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) </script> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) 接著在四條直線中央畫一個圓: <canvas id=\"japanflag3\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python\"> from browser import document import math # 準備繪圖畫布 canvas = document[\"japanflag3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) # 以下要在框線中央畫一個圓, 設半徑為 80 # context.arc(x,y,r,sAngle,eAngle,counterclockwise) # arc(圓心 x, 圓心 y, 起始角, 終點角, 是否逆時鐘轉) circle_x = 10 + 400/2 circle_y = 10 + 300/2 ctx.beginPath() ctx.arc(circle_x, circle_y, 80, 0, math.pi*2, True) # 設線顏色為紅色 ctx.strokeStyle = 'rgb(255, 0, 0)' ctx.stroke() # 填色設為紅色 ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() ctx.closePath() </script> from browser import document import math # 準備繪圖畫布 canvas = document[\"japanflag3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) # 以下要在框線中央畫一個圓, 設半徑為 80 # context.arc(x,y,r,sAngle,eAngle,counterclockwise) # arc(圓心 x, 圓心 y, 起始角, 終點角, 是否逆時鐘轉) circle_x = 10 + 400/2 circle_y = 10 + 300/2 ctx.beginPath() ctx.arc(circle_x, circle_y, 80, 0, math.pi*2, True) # 設線顏色為紅色 ctx.strokeStyle = 'rgb(255, 0, 0)' ctx.stroke() # 填色設為紅色 ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() ctx.closePath() 然後將各繪圖模組寫成函式: <canvas id=\"japanflag4\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag4\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(ctx, x1, y1, x2, y2): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 將外框線寫成函式, 寬為高的 3/2 倍 # 因為 draw_frame 函式呼叫 draw_line() 因此要在其後定義 def draw_frame(ctx, x, y, w): # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (x, y) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(ctx, x, y, w*3/2+x, y) draw_line(ctx, x, w+y, w*3/2+x, w+y) # 再畫兩條垂直線 draw_line(ctx, x, y, x, w+y) draw_line(ctx, w*3/2+x, y, w*3/2+x, w+y) def draw_circle(x, y, r, fill=None): global ctx ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) if fill == None: ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() else: ctx.strokeStyle = \"rgb(255, 0, 0)\" ctx.stroke() ctx.closePath() # 呼叫 draw_frame() width = 400 draw_frame(ctx, 10, 10, width) # 計算框的中心點座標 x_center = 10 + width*3/2/2 y_center = 10 + width/2 # 中間圓的直徑為寬的 3/5 radius = width*3/5/2 draw_circle(x_center, y_center, radius) </script> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag4\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(ctx, x1, y1, x2, y2): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 將外框線寫成函式, 寬為高的 3/2 倍 # 因為 draw_frame 函式呼叫 draw_line() 因此要在其後定義 def draw_frame(ctx, x, y, w): # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (x, y) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(ctx, x, y, w*3/2+x, y) draw_line(ctx, x, w+y, w*3/2+x, w+y) # 再畫兩條垂直線 draw_line(ctx, x, y, x, w+y) draw_line(ctx, w*3/2+x, y, w*3/2+x, w+y) def draw_circle(x, y, r, fill=None): global ctx ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) if fill == None: ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() else: ctx.strokeStyle = \"rgb(255, 0, 0)\" ctx.stroke() ctx.closePath() # 呼叫 draw_frame() width = 400 draw_frame(ctx, 10, 10, width) # 計算框的中心點座標 x_center = 10 + width*3/2/2 y_center = 10 + width/2 # 中間圓的直徑為寬的 3/5 radius = width*3/5/2 draw_circle(x_center, y_center, radius) 接下來畫中華民國國旗: # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"rocflag\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill() <canvas id=\"rocflag\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python3\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"rocflag\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill() </script>","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html"}]};