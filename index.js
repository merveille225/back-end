const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv")
dotenv.config()

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // Utilisation de la base de données "bdestiam"
});


//EMPLOYES

app.post("/employes", (req, res) => {
  const { Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date } = req.body;

  db.query(
    "INSERT INTO employe (Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date) VALUES (?, ?, ?, ?, ?)",
    [Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Employé ajouté");
      }
    }
  );
});

app.get("/employes", (req, res) => {
  db.query("SELECT * FROM employe", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/employes/:id", (req, res) => {
  const id = req.params.id;
  const { Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date } = req.body;

  db.query(
    "UPDATE employe SET Nom_employe = ?, Prenom_employe = ?, Email_employe = ?, Mdp_employe = ?, date = ? WHERE Id_employe = ?",
    [Nom_employe, Prenom_employe, Email_employe, Mdp_employe, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Employé mis à jour");
      }
    }
  );
});

app.delete("/employes/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM employe WHERE Id_employe = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Employé supprimé");
    }
  });
});


//SAVOIR

app.post("/savoirs", (req, res) => {
  const {
    Performance,
    coopération,
    Orientation_client,
    Fiabilité,
    Engagement,
    Autonomie,
    Investissement,
    Autres_qualités,
    Id_employe,
  } = req.body;

  db.query(
    "INSERT INTO savoir (Performance, coopération, Orientation_client, Fiabilité, Engagement, Autonomie, Investissement, Autres_qualités, Id_employe) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      Performance,
      coopération,
      Orientation_client,
      Fiabilité,
      Engagement,
      Autonomie,
      Investissement,
      Autres_qualités,
      Id_employe,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Savoir ajouté");
      }
    }
  );
});

app.get("/savoirs", (req, res) => {
  db.query("SELECT * FROM savoir", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/savoirs/:id", (req, res) => {
  const id = req.params.id;
  const {
    Performance,
    coopération,
    Orientation_client,
    Fiabilité,
    Engagement,
    Autonomie,
    Investissement,
    Autres_qualités,
    Id_employe,
  } = req.body;

  db.query(
    "UPDATE savoir SET Performance = ?, coopération = ?, Orientation_client = ?, Fiabilité = ?, Engagement = ?, Autonomie = ?, Investissement = ?, Autres_qualités = ?, Id_employe = ? WHERE Id_savoir = ?",
    [
      Performance,
      coopération,
      Orientation_client,
      Fiabilité,
      Engagement,
      Autonomie,
      Investissement,
      Autres_qualités,
      Id_employe,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Savoir mis à jour");
      }
    }
  );
});

app.delete("/savoirs/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM savoir WHERE Id_savoir = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Savoir supprimé");
    }
  });
});


// PROJET

app.post("/projets", (req, res) => {
  const { perspectivesProjet, Id_employe } = req.body;

  db.query(
    "INSERT INTO projet (perspectivesProjet, Id_employe) VALUES (?, ?)",
    [perspectivesProjet, Id_employe],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Projet ajouté");
      }
    }
  );
});

app.get("/projets", (req, res) => {
  db.query("SELECT * FROM projet", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/projets/:id", (req, res) => {
  const id = req.params.id;
  const { perspectivesProjet, Id_employe } = req.body;

  db.query(
    "UPDATE projet SET perspectivesProjet = ?, Id_employe = ? WHERE Id_projet = ?",
    [perspectivesProjet, Id_employe, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Projet mis à jour");
      }
    }
  );
});

app.delete("/projets/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM projet WHERE Id_projet = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Projet supprimé");
    }
  });
});


// OBJECTIFS FUTURS

app.post("/objectifsfuturs", (req, res) => {
  const {
    objectif1,
    objectif2,
    objectif3,
    Id_employe,
  } = req.body;

  db.query(
    "INSERT INTO objectiffutur (objectif1, objectif2, objectif3, Id_employe) VALUES (?, ?, ?, ?)",
    [objectif1, objectif2, objectif3, Id_employe],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Objectif futur ajouté");
      }
    }
  );
});

app.get("/objectifsfuturs", (req, res) => {
  db.query("SELECT * FROM objectiffutur", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/objectifsfuturs/:id", (req, res) => {
  const id = req.params.id;
  const {
    objectif1,
    objectif2,
    objectif3,
    Id_employe,
  } = req.body;

  db.query(
    "UPDATE objectiffutur SET objectif1 = ?, objectif2 = ?, objectif3 = ?, Id_employe = ? WHERE Id_objectiffutur = ?",
    [objectif1, objectif2, objectif3, Id_employe, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Objectif futur mis à jour");
      }
    }
  );
});

app.delete("/objectifsfuturs/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM objectiffutur WHERE Id_objectiffutur = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Objectif futur supprimé");
    }
  });
});


// AMELIORATION

app.post("/pointameliorations", (req, res) => {
  const { point_amélioration, Id_employe } = req.body;

  db.query(
    "INSERT INTO amélioration (point_amélioration, Id_employe) VALUES (?, ?)",
    [point_amélioration, Id_employe],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Amélioration ajoutée");
      }
    }
  );
});

app.get("/pointameliorations", (req, res) => {
  db.query("SELECT * FROM amélioration", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/pointameliorations/:id", (req, res) => {
  const id = req.params.id;
  const { point_amélioration, Id_employe } = req.body;

  db.query(
    "UPDATE amélioration SET point_amélioration = ?, Id_employe = ? WHERE Id_amélioration = ?",
    [point_amélioration, Id_employe, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Amélioration mise à jour");
      }
    }
  );
});

app.delete("/pointameliorations/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM amélioration WHERE Id_amélioration = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Amélioration supprimée");
    }
  });
});



// BILANS

app.post("/bilans", (req, res) => { const { bilangenerale, IDemploye } = req.body;

db.query( "INSERT INTO bilan (bilan_générale, Id_employe) VALUES (?, ?)", [bilangenerale, IDemploye], (err, result) => { if (err) { console.log(err); } else { res.send("Bilan ajouté"); } } ); });

app.get("/bilans", (req, res) => {
  db.query("SELECT * FROM bilan", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/bilans/:id", (req, res) => { const id = req.params.id; const { bilangenerale, IDemploye } = req.body;

db.query( "UPDATE bilan SET bilan_générale = ?, Id_employe = ? WHERE Id_bilan = ?", [bilangenerale, IDemploye, id], (err, result) => { if (err) { console.log(err); } else { res.send("Bilan mis à jour"); } } ); });

app.delete("/bilans/:id", (req, res) => {
  const id = req.params.id;

db.query("DELETE FROM bilan WHERE Id_bilan = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Bilan supprimé");
    }
  });
});


//COMPETENCES (cartographie)

app.post("/competences", (req, res) => {
  const { compétence1, compétence2, compétence3, compétence4, Id_employe } = req.body;

  db.query(
    "INSERT INTO cartographie (compétence1, compétence2, compétence3, compétence4, Id_employe) VALUES (?, ?, ?, ?, ?)",
    [compétence1, compétence2, compétence3, compétence4, Id_employe],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Cartographie ajoutée");
      }
    }
  );
});

app.get("/competences", (req, res) => {
  db.query("SELECT * FROM cartographie", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/competences/:id", (req, res) => {
  const id = req.params.id;
  const { compétence1, compétence2, compétence3, compétence4, Id_employe } = req.body;

  db.query(
    "UPDATE cartographie SET compétence1 = ?, compétence2 = ?, compétence3 = ?, compétence4 = ?, Id_employe = ? WHERE Id_cartographie = ?",
    [compétence1, compétence2, compétence3, compétence4, Id_employe, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Cartographie mise à jour");
      }
    }
  );
});

app.delete("/competences/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM cartographie WHERE Id_cartographie = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Cartographie supprimée");
    }
  });
});


// CONCLUSION

app.post("/conclusions", (req, res) => { const { Id_conclusion, conclusion, Id_employe } = req.body;

db.query( "INSERT INTO conclusion (Id_conclusion, conclusion, Id_employe) VALUES (?, ?, ?)", [Id_conclusion, conclusion, Id_employe], (err, result) => { if (err) { console.log(err); } else { res.send("Conclusion ajoutée"); } } ); });

app.get("/conclusions", (req, res) => {
  db.query("SELECT * FROM conclusion", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});


app.put("/conclusions/:id", (req, res) => { const id = req.params.id; const { Id_conclusion, conclusion, Id_employe } = req.body;

db.query( "UPDATE conclusion SET Id_conclusion = ?, conclusion = ?, Id_employe = ? WHERE Id_conclusion = ?", [Id_conclusion, conclusion, Id_employe, id], (err, result) => { if (err) { console.log(err); } else { res.send("Conclusion mise à jour"); } } ); });

app.delete("/conclusions/:id", (req, res) => {
  const id = req.params.id;

db.query("DELETE FROM conclusion WHERE Id_conclusion = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Conclusion supprimée");
    }
   });
});


//OBJECTIFS FIXES

app.post("/objectifsfixes", (req, res) => {
  const { objectif1, objectif2, objectif3, Id_employe } = req.body;

  db.query( "INSERT INTO objectiffixe (objectif1, objectif2, objectif3, Id_employe) VALUES (?, ?, ?, ?)", [objectif1, objectif2, objectif3, Id_employe], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Objectif fixé ajouté");
    }
  });
});

app.get("/objectifsfixes", (req, res) => {

  db.query("SELECT * FROM objectiffixe ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/objectifsfixes/:id", (req, res) => {
  const id = req.params.id;
  const { objectif1, objectif2, objectif3, Id_employe } = req.body;

  db.query( "UPDATE objectiffixe SET objectif1 = ?, objectif2 = ?, objectif3 = ?, Id_employe = ? WHERE Id_objectiffixé = ?", [objectif1, objectif2, objectif3, Id_employe, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Objectif fixé mis à jour");
    }
  });
});

app.delete("/objectifsfixes/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM objectiffixe WHERE Id_objectiffixé = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Objectif fixé supprimé");
    }
  });
});

app.get("/recherches", (req, res) => {
  db.query("SELECT * FROM employe LEFT JOIN bilan ON employe.Id_employe = bilan.Id_employe LEFT JOIN objectiffixe ON employe.Id_employe = objectiffixe.Id_employe LEFT JOIN objectiffutur ON employe.Id_employe = objectiffutur.Id_employe LEFT JOIN objectifvalidation ON employe.Id_employe = objectifvalidation.Id_employe LEFT JOIN amélioration ON employe.Id_employe = amélioration.Id_employe LEFT JOIN savoir ON employe.Id_employe = savoir.Id_employe LEFT JOIN projet ON employe.Id_employe = projet.Id_employe LEFT JOIN cartographie ON employe.Id_employe = cartographie.Id_employe LEFT JOIN conclusion ON employe.Id_employe = conclusion.Id_employe WHERE employe.Id_employe = 4;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(8000, () => {
  console.log(`Le serveur est en cours d'exécution sur le port : ${8000}`);
});
