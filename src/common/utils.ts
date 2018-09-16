import { Clipboard } from "react-native";

export default {
  blobToDataURL: (input: Blob): Promise<string> => {
    let reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(input);
    });
  },
  getMicrodataFromUrl: async (url:string) => {
    const response:any = await fetch(url);
    const tags:string[] = (await response.text()).split('<meta');
    
    let metaMap:any = {};
    for(let tag of tags) {
      const regexes = [new RegExp('name="([^\\s]*?)(?::|-)([^\\s]*?)"', 'ig'),
        new RegExp('property="([^\\s]*?)(?::|-)([^\\s]*?)"', 'ig'),
        new RegExp('content="(.*?)"', 'ig')
      ];
  
      const matches = regexes.map((regex) => {
        return regex.exec(tag);
      });
  
      if(!matches[0] && !matches[1] || !matches[2]) {
        continue;
      }
  
      const groupMatch = matches[0]? (matches[0] as RegExpExecArray): (matches[1] as RegExpExecArray);
      const group = groupMatch[1];
      const key = groupMatch[2]
      const value = (matches[2] as RegExpExecArray)[1];
  
      if(!metaMap[group]) {
        metaMap[group] = {};
      }
  
      metaMap[group][key] = value;
    }
    console.log(metaMap);
    return metaMap;
  }
}