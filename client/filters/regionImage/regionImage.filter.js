export default class regionImage {

  constructor() {
    this.fileNames = [
      '18.jpg',
      '30.jpg',
      '35.jpg',
      '47.jpg',
      '49.jpg',
      '79.jpg'
    ];
    return (input) => {
      let fileName = this.fileNames[input - 1];
      return `/images/${fileName}`;
    }
  }

  static activate(){
    regionImage.instance = new regionImage();
    return regionImage.instance;
  }

}
