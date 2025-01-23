import { invoke } from "@tauri-apps/api/core";

async function greet(setGreetMsg: (msg: string) => void, name: string) {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  setGreetMsg(await invoke("greet", { name }));
}

export default greet;