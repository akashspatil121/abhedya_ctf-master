import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home.js";
import Category from "./Components/Category/Category.js";
import Cryptography from "./Components/Cryptography/Cryptography.js";
import Cryptochallenges from "./Components/Cryptography/Cryptochallenges";
import Navbar from "./Components/Navbar/Navbar";
import Forensic from "./Components/Forensic/Forensic";
import NewChallenges from "./Components/Admin/Challenges/NewChallenges/NewChallenges";
import Challenges from "./Components/Admin/Challenges/Challenges";
import User from "./Components/Admin/User/User";
import Forensicchallenges from "./Components/Forensic/Forensicchallenges";
import Reverse from "./Components/Reverse/Reverse";
import Reversechallenges from "./Components/Reverse/Reversechallenges";
import Web from "./Components/Web/Web";
import Webchallenges from "./Components/Web/Webchallenges";
import Code_X from "./Components/Code_X/Code_X";
import Code_Xchallenges from "./Components/Code_X/Code_Xchallenges";
import Misc from "./Components/Misc/Misc";
import Miscchallenges from "./Components/Misc/Miscchallenges";
import Osint from "./Components/Osint/Osint";
import Osintchallenges from "./Components/Osint/Osintchallenges";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Reset from "./Components/Reset/Reset";
import Notification from "./Components/Admin/Notification/Notification";
import Scorebored from "./Components/Admin/Scorebored/Table";
import UserInformation from "./Components/Admin/User/UserInformation";
import AllPages from "./Components/Admin/Pages/AllPages";
import NewPages from "./Components/Admin/Pages/NewPages";
import CreateUser from "./Components/Admin/User/CreateUser";
import ChallengesUserClick from "./Components/Admin/Challenges/ChallengesUserClick";
import AdminNavbar from "./Components/Admin/AdminNavbar/AdminNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/navbar" component={Navbar} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/category/cryptography" component={Cryptography} />
          <Route exact path="/category/cryptography/cryptochallenges" component={Cryptochallenges} />
          <Route exact path="/category/forensic" component={Forensic} />
          <Route exact path="/category/forensic/forensicchallenges" component={Forensicchallenges} />
          <Route exact path="/category/reverse" component={Reverse} />
          <Route exact path="/category/reverse/reversechallenges" component={Reversechallenges} />
          <Route exact path="/category/web" component={Web} />
          <Route exact path="/category/web/webchallenges" component={Webchallenges} />
          <Route exact path="/category/code_X" component={Code_X} />
          <Route exact path="/category/code_X/code_Xchallenges" component={Code_Xchallenges} />
          <Route exact path="/category/misc" component={Misc} />
          <Route exact path="/category/misc/miscchallenges" component={Miscchallenges} />
          <Route exact path="/category/osint" component={Osint} />
          <Route exact path="/category/osint/osintchallenges" component={Osintchallenges} />
          <Route exact path="/admin/navabaradmin" component={AdminNavbar} />
          <Route exact path="/admin/challenges" component={Challenges} />
          <Route exact path="/admin/challenges/new" component={NewChallenges} />
          <Route exact path="/admin/user" component={User} />
          <Route exact path="/admin/notification" component={Notification} />
          <Route exact path="/admin/scorebored" component={Scorebored} />
          <Route exact path="/admin/userinformation" component={UserInformation} />
          <Route exact path="/admin/page" component={AllPages} />
          <Route exact path="/admin/newpage" component={NewPages} />
          <Route exact path="/admin/createuser" component={CreateUser} />
          <Route exact path="/admin/challenges/user" component={ChallengesUserClick} />          
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/reset" component={Reset} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;








// Project Done By : Nisha 
// In react Akshay & Gaurav Pandey