import Modules

def main():
    # Prompt the user to input the file path
    source_path = input("Enter the file path of the file you want to copy: ")

    # Prompt the user to input the destination folder path
    destination_folder = input("Enter the destination folder path where you want to copy the file: ")

    Modules.copyInputFile(source_path, destination_folder)

if __name__=="__main__": 
    main() 