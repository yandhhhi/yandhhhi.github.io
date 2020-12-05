const key = "2a73df949da1444a96e424823b11f5f2";
const url = "https://api.football-data.org/v2/";
const inggris = 2021;
const spanyol = 2014;
const prancis = 2015;
const jerman = 2002;

const klasemen_inggris = `${url}competitions/${inggris}/standings?standingType=TOTAL`;
const klasemen_spanyol = `${url}competitions/${spanyol}/standings?standingType=TOTAL`;
const klasemen_prancis = `${url}competitions/${prancis}/standings?standingType=TOTAL`;
const klasemen_jerman = `${url}competitions/${jerman}/standings?standingType=TOTAL`;

const fetchApi = function (url) {
  return fetch(url, {
    method: "get",
    mode: "cors",
    headers: {
      "X-Auth-Token": key
    }
  });
};

function status(response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

function json(response) {
  return response.json();
}

function error(error) {
  console.log("Error : " + error);
}

function getAllStandings_inggris() {
  if ("caches" in window) {
    caches.match(klasemen_inggris).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          getKlasemen_inggris(data);
        })
      }
    })
  }

  fetchApi(klasemen_inggris)
    .then(data => {
      getKlasemen_inggris(data);
    })
    .catch(error => {
      console.log(error)
    })
}

function getAllStandings_spanyol() {
  if ("caches" in window) {
    caches.match(klasemen_spanyol).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          getKlasemen_spanyol(data);
        })
      }
    })
  }

  fetchApi(klasemen_spanyol)
    .then(data => {
      getKlasemen_spanyol(data);
    })
    .catch(error => {
      console.log(error)
    })
}

function getAllStandings_prancis() {
  if ("caches" in window) {
    caches.match(klasemen_prancis).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          getKlasemen_prancis(data);
        })
      }
    })
  }

  fetchApi(klasemen_prancis)
    .then(data => {
      getKlasemen_prancis(data);
    })
    .catch(error => {
      console.log(error)
    })
}

function getAllStandings_jerman() {
  if ("caches" in window) {
    caches.match(klasemen_jerman).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          getKlasemen_jerman(data);
        })
      }
    })
  }

  fetchApi(klasemen_jerman)
    .then(data => {
      getKlasemen_jerman(data);
    })
    .catch(error => {
      console.log(error)
    })
}

function getKlasemen_inggris(data) {

      data.standings.forEach(function (standing) {
        standing.table.forEach(function (placement) {
          let table = "";
          let logo = placement.team.crestUrl.replace(
            /^http:\/\//i,
            "https://"
          );
          table += `
            <tr>
              <td class="center-align team-name">${placement.position}.</td>
              <td class="center-align">
                <a href="detail.html?id=${placement.team.id}"><img class="responsive-img" src="${logo}" class="logo" alt="${placement.team.name}"></a>
              </td>
              <td>
                <a href="detail.html?id=${placement.team.id}">${placement.team.name}</a>
              </td>
              <td class="center-align">${placement.playedGames}</td>
              <td class="center-align">${placement.won}</td>
              <td class="center-align">${placement.draw}</td>
              <td class="center-align">${placement.lost}</td>
              <td class="center-align">${placement.goalDifference}</td>
              <td class="center-align">${placement.points}</td>
            </tr>
          `;

          let content = document.getElementById("klasemen-inggris").innerHTML + table;
          document.getElementById("klasemen-inggris").innerHTML = content;
        });
      });

      document.getElementById("last-update-inggris").innerHTML = "Last Updated: " + data.competition.lastUpdated;
}

function getKlasemen_spanyol(data) {
      data.standings.forEach(function (standing) {
        standing.table.forEach(function (placement) {
          let table = "";
          let logo = placement.team.crestUrl.replace(
            /^http:\/\//i,
            "https://"
          );
          table += `
            <tr>
              <td class="center-align team-name">${placement.position}.</td>
              <td class="center-align">
                <a href="detail.html?id=${placement.team.id}"><img class="responsive-img" src="${logo}" class="logo" alt="${placement.team.name}"></a>
              </td>
              <td>
                <a href="detail.html?id=${placement.team.id}">${placement.team.name}</a>
              </td>
              <td class="center-align">${placement.playedGames}</td>
              <td class="center-align">${placement.won}</td>
              <td class="center-align">${placement.draw}</td>
              <td class="center-align">${placement.lost}</td>
              <td class="center-align">${placement.goalDifference}</td>
              <td class="center-align">${placement.points}</td>
            </tr>
          `;

          let content = document.getElementById("klasemen-spanyol").innerHTML + table;
          document.getElementById("klasemen-spanyol").innerHTML = content;
        });
      });

      document.getElementById("last-update-spanyol").innerHTML = "Last Updated: " + data.competition.lastUpdated;
}

function getKlasemen_prancis(data) {
      data.standings.forEach(function (standing) {
        standing.table.forEach(function (placement) {
          let table = "";
          let logo = placement.team.crestUrl.replace(
            /^http:\/\//i,
            "https://"
          );
          table += `
            <tr>
              <td class="center-align team-name">${placement.position}.</td>
              <td class="center-align">
                <a href="detail.html?id=${placement.team.id}"><img class="responsive-img" src="${logo}" class="logo" alt="${placement.team.name}"></a>
              </td>
              <td>
                <a href="detail.html?id=${placement.team.id}">${placement.team.name}</a>
              </td>
              <td class="center-align">${placement.playedGames}</td>
              <td class="center-align">${placement.won}</td>
              <td class="center-align">${placement.draw}</td>
              <td class="center-align">${placement.lost}</td>
              <td class="center-align">${placement.goalDifference}</td>
              <td class="center-align">${placement.points}</td>
            </tr>
          `;

          let content = document.getElementById("klasemen-prancis").innerHTML + table;
          document.getElementById("klasemen-prancis").innerHTML = content;
        });
      });
      document.getElementById("last-update-prancis").innerHTML = "Last Updated: " + data.competition.lastUpdated;
}

function getKlasemen_jerman(data) {
      data.standings.forEach(function (standing) {
        standing.table.forEach(function (placement) {
          let table = "";
          let logo = placement.team.crestUrl.replace(
            /^http:\/\//i,
            "https://"
          );
          table += `
            <tr>
              <td class="center-align team-name">${placement.position}.</td>
              <td class="center-align">
                <a href="detail.html?id=${placement.team.id}"><img class="responsive-img" src="${logo}" class="logo" alt="${placement.team.name}"></a>
              </td>
              <td>
                <a href="detail.html?id=${placement.team.id}">${placement.team.name}</a>
              </td>
              <td class="center-align">${placement.playedGames}</td>
              <td class="center-align">${placement.won}</td>
              <td class="center-align">${placement.draw}</td>
              <td class="center-align">${placement.lost}</td>
              <td class="center-align">${placement.goalDifference}</td>
              <td class="center-align">${placement.points}</td>
            </tr>
          `;

          let content = document.getElementById("klasemen-jerman").innerHTML + table;
          document.getElementById("klasemen-jerman").innerHTML = content;
        });
      });

      document.getElementById("last-update-jerman").innerHTML = "Last Updated: " + data.competition.lastUpdated;
}

function getClubById() {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get("id");
  fetchApi(url + 'teams/' + idParam)
    .then(status)
    .then(json)
    .then(function (data) {
      console.log(data);
      let detailHTML = "";
      let logo = data.crestUrl.replace(
        /^http:\/\//i,
        "https://"
      );
      detailHTML += `
        <div class="row center-align">
          <div class="col s12 m6">
            <img src="${logo}" class="logo-detail responsive-img"></a>
            <h5>${data.name}</h5>
          </div>
          <div class="col s12 m6">
          <table>
            <tr>
              <td class="team-name">Adress</td>
              <td>${data.address}</td>
            </tr>
            <tr>
              <td class="team-name">Email</td>
              <td>${data.email}</td>
            </tr>
            <tr>
              <td class="team-name">Founded</td>
              <td>${data.founded}</td>
            </tr>
            <tr>
              <td class="team-name">Phone</td>
              <td>${data.phone}</td>
            </tr>
            <tr>
              <td class="team-name">Stadium</td>
              <td>${data.venue}</td>
            </tr>
            <tr>
              <td class="team-name">Website</td>
              <td><a href="${data.website}" target="_blank">${data.website}</a></td>
            </tr>
          </table>
          <button class="btn red waves-effect waves-light" id="btnDelete"><i class="material-icons left">delete</i>Hapus dari Favorit</button>
          <button class="btn indigo waves-effect waves-light" id="btnSave"><i class="material-icons left">add</i>Tambah Favorit</button>
          </div>
        </div>
      `;

      let playerTable = "";
      data.squad.forEach(player => {
        playerTable += `
          <li>
            <div class="collapsible-header"><p class="team-name">${player.name}</p></div>
          </li>
        `;
      })

      document.getElementById("detail-club").innerHTML = detailHTML;
      document.getElementById("player-club").innerHTML = playerTable;
      buttonAction(data);
    })
    .catch(error);

}

function getFavoriteTeam() {
  var dbData = getFavData();
  dbData.then(data => {
    var timBodyHtml = '';
    if (data.length > 0) {
      data.forEach(team => {
        timBodyHtml += `
            <div class="col s3">
              <img src=${team.crestUrl.replace(/^http:\/\//i, 'https://')} alt="" class="responsive-img" width="220"><br>
              <a href="detail.html?id=${team.id}"><b>${team.name}</b></a>
            </div>
            <br><br>`;
      });
    } else {
      timBodyHtml = '<h6>Belum ada tim favorit ditambahkan</h6>';
    }
    document.getElementById("favorites").innerHTML = timBodyHtml;
  });
}

function buttonAction(data) {
  const btnSave = document.getElementById("btnSave");
  const btnDelete = document.getElementById("btnDelete");

  checkData(data.id).then(() => {
    btnSave.style.display = "none";
    btnDelete.style.display = "block";
  }).catch(() => {
    btnSave.style.display = "block";
    btnDelete.style.display = "none";
  });

  btnSave.onclick = () => {
    addFavorite(data);
    btnSave.style.display = "none";
    btnDelete.style.display = "block";
  };

  btnDelete.onclick = () => {
    deleteFavorite(data);
    btnSave.style.display = "block";
    btnDelete.style.display = "none";
  }
}