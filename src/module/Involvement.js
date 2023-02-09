export default class Involvement {
  constructor() {
    this.appID = 'RBrsUTVautuAC386npFh';
    this.baseURI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.appID}/`;
  }

  getLikes = async () => fetch(`${this.baseURI}likes`).then((response) => response.json())

  addLike = async (id) => {
    fetch(`${this.baseURI}likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }
}