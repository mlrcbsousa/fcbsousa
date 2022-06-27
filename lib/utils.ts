import fs from 'fs';

function capitalize([initial, ...chars]: string) {
  return `${initial.toUpperCase()}${chars.join('')}`;
}

function capitalizeFirstWord([word, ...words]: string[]) {
  return `${capitalize(word)} ${words.join(' ')}`;
}

export function itemsFromFolder(folder: string) {
  let result: SidebarItem[] = [];

  fs.readdir(`${process.cwd()}/src/${folder}`, (err, filenames) => {
    if (err) {
      console.warn(err);
      return;
    }

    filenames.map(file => {
      const name = file.replace(/\.[^/.]+$/, "")

      result.push({
        text: capitalizeFirstWord(name.split('-')),
        link: `/${folder}/${name}`
      })
    })
  });

  return result;
}
