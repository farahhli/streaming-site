
import os
import logging
import json
import re
from pathlib import Path
from shutil import move
from concurrent.futures import ThreadPoolExecutor
from tkinter import filedialog, messagebox
import tkinter as tk

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')

def get_versioned_filename(file_path: Path) -> Path:
    base, extension = file_path.stem, file_path.suffix
    version = 1
    while file_path.exists():
        version += 1
        file_path = file_path.with_name(f"{base}_v{version}{extension}")
    return file_path

def move_file_with_versioning(file: Path, save_directory: Path):
    target_directory = save_directory / "organized_files"
    target_directory.mkdir(parents=True, exist_ok=True)
    versioned_file_path = get_versioned_filename(target_directory / file.name)
    move(str(file), str(versioned_file_path))
    logging.info(f"Moved {file.name} to {versioned_file_path}")

def process_files(files, save_directory):
    with ThreadPoolExecutor() as executor:
        for file in files:
            executor.submit(move_file_with_versioning, file, save_directory)

def select_directory(prompt: str) -> Path:
    return Path(filedialog.askdirectory(title=prompt)) if filedialog.askdirectory() else None

def run_gui():
    window = tk.Tk()
    window.title("File Organizer")
    window.geometry("400x200")

    def start_process():
        download_dir = select_directory("Select Download Directory")
        save_dir = select_directory("Select Save Directory")
        if not download_dir or not save_dir:
            messagebox.showwarning("Input Required", "Both directories are required.")
            return
        files = [f for f in download_dir.iterdir() if f.is_file()]
        if not files:
            messagebox.showinfo("No Files", "No files found to process.")
            return
        process_files(files, save_dir)
        messagebox.showinfo("Success", "Files processed successfully!")

    start_button = tk.Button(window, text="Start Process", command=start_process)
    start_button.pack(pady=20)

    window.mainloop()

if __name__ == "__main__":
    run_gui()
