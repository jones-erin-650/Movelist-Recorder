import tkinter as tk
import tkinter.filedialog as fd
import json

with open('View/vars.json') as f:
    data = json.load(f)

#Create main window and set attributes
window = tk.Tk()
window.title('Test GUI')
window.iconbitmap('View/my_dog.ico')
window.geometry('540x320')
window.eval('tk::PlaceWindow . center')

def filepath_prompt():
    promptbox = tk.Toplevel(window)
    promptbox.title('Set Recording Filepath')
    window.eval(f'tk::PlaceWindow {str(promptbox)} center')
    promptbox.transient(window)
    promptbox.grab_set()
    # promptbox.geometry('425x90')

    ent = tk.Entry(promptbox, width=50)
    ent.grid(row=1,column=1)
    if data['filepath_recording'] != 'unset':
        ent.insert(0, data['filepath_recording'])

    browse = tk.Button(promptbox, text='Browse', command=lambda: get_filepath(ent))
    browse.grid(row=1, column=2)

    confirm = tk.Button(promptbox, text='Confirm', command=promptbox.destroy)
    confirm.grid(row=2,column=2)

def get_filepath(entrybox):
    filepath = fd.askdirectory()
    entrybox.delete(0, 'end')
    data['filepath_recording'] = filepath
    with open('View/vars.json', 'w') as f:
        json.dump(data, f)
    entrybox.insert(0,filepath)

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