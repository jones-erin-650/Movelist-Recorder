import tkinter as tk
import tkinter.filedialog as fd

#Create main window and set attributes
window = tk.Tk()
window.title('Test GUI')
window.geometry('540x320')

def filepath_prompt():
    promptbox = tk.Toplevel(window)
    promptbox.title('Enter Filepath')
    promptbox.geometry('500x150')

    ent = tk.Entry(promptbox, width=50)
    ent.place(relx=0.5,rely=0.5,anchor='center')
    filename = fd.askdirectory()
    ent.insert(0,filename)


#Create menu bar
menubar = tk.Menu(window)

#Create File dropdown menu
filemenu = tk.Menu(menubar, tearoff=0)
menubar.add_cascade(label='File', menu=filemenu)
filemenu.add_command(label='Set Recording Filepath', command=filepath_prompt)
filemenu.add_separator()
filemenu.add_command(label='Quit', command=window.destroy)

#Create exit button
button = tk.Button(height=5,width=10,text="Quit",bg="gray", activebackground='red', command=window.destroy)
button.pack()

window.config(menu=menubar)
window.mainloop()