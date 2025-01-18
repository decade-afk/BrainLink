// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::fs;
use std::path::PathBuf;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![read_dir])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn read_dir(path: String) -> Result<Vec<String>, String> {
    let path_buf = PathBuf::from(path);
    if path_buf.is_dir() {
        match fs::read_dir(path_buf) {
            Ok(entries) => {
                let mut files = Vec::new();
                for entry in entries {
                    if let Ok(entry) = entry {
                        if let Ok(file_name) = entry.file_name().into_string() {
                            files.push(file_name);
                        }
                    }
                    print!("{:?}", files);
                }
                Ok(files)
            }
            Err(e) => Err(e.to_string()),
        }
    } else {
        Err("Provided path is not a directory".to_string())
    }
}