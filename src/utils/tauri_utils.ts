import { invoke } from '@tauri-apps/api/core';

const readDirectory = async (path: string) => {
  try {
    const files = await invoke("read-dir", { path });
    return files;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
};

export default readDirectory;