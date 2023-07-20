export class Init {
  load(localStorageKey: string) {
    if(localStorage.getItem(localStorageKey) === null || localStorage.getItem(localStorageKey) == undefined) {
      console.log('No data');
      localStorage.setItem(localStorageKey, JSON.stringify([]));
      return
    } else {
      console.log('Found Data...');
    }
  }
}
