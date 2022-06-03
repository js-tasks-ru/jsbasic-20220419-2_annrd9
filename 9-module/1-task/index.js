export default function promiseClick(button) {
  return new Promise((resolve, reject) => {
    button.addEventListener('click', (event) => {
      if (event.target === button){
        resolve(event)
      } else {
        reject(new Error())
      };
    }, { once: true });
  });
}