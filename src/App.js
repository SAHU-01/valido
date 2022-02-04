import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/lasignup.png">
              <Button to="/alogin1" x="410" y="180" w="50" h="55" />
              <Button to="/llogin1" x="410" y="260" w="50" h="55" />
            </Screen>
          }
        />
        <Route
          path="/llogin1"
          element={
            <Screen image="/llogin1.png">
              <Button to="/ldash1" x="255" y="315" w="210" h="70" />
              <Button to="/lsignup1" x="320" y="400" w="100" h="20" />
              <Button to="/llogin2" x="170" y="130" w="355" h="70" />
              <Button to="/llogin2" x="170" y="210" w="360" h="60" />
            </Screen>
          }
        />
        <Route
          path="/llogin2"
          element={
            <Screen image="/llogin2.png">
              <Button to="/ldash1" x="240" y="300" w="210" h="70" />
              <Button to="/lsignup1" x="320" y="380" w="100" h="20" />
            </Screen>
          }
        />
        <Route
          path="/lsignup1"
          element={
            <Screen image="/lsignup1.png">
              <Button to="/lsignup2" x="270" y="190" w="400" h="55" />
              <Button to="/lsignup2" x="270" y="270" w="400" h="55" />
              <Button to="/lsignup2" x="270" y="345" w="400" h="55" />
              <Button to="/ldash1" x="370" y="510" w="210" h="90" />
            </Screen>
          }
        />
        <Route
          path="/lsignup2"
          element={
            <Screen image="/lsignup2.png">
              <Button to="/lsignup3" x="610" y="340" w="40" h="55" />
              <Button to="/signup4" x="370" y="510" w="210" h="90" />
            </Screen>
          }
        />
        <Route
          path="/lsignup3"
          element={
            <Screen image="/lsignup3.png">
              <Button to="/lsignup4" x="350" y="490" w="210" h="90" />
            </Screen>
          }
        />
        <Route
          path="/lsignup4"
          element={
            <Screen image="/lsignup4.png">
              <Button to="/ldash1" x="380" y="530" w="210" h="90" />
            </Screen>
          }
        />
        <Route
          path="/ldash1"
          element={
            <Screen image="/ldash1.png">
              <Button to="/ldashnoti" x="640" y="20" w="50" h="50" />
              <Button to="/lmenu" x="700" y="20" w="30" h="50" />
            </Screen>
          }
        />
        <Route
          path="/ldashnoti"
          element={
            <Screen image="/ldashnoti.png">
              <Button to="/ldash1" x="670" y="20" w="50" h="50" />
            </Screen>
          }
        />
        <Route
          path="/lmenu"
          element={
            <Screen image="/lmenu.png">
              <Button to="/lform" x="230" y="55" w="100" h="30" />
              <Button to="/" x="240" y="95" w="80" h="30" />
            </Screen>
          }
        />
        <Route
          path="/lform"
          element={
            <Screen image="/lform.png">
              <Button to="/ldash2" x="280" y="360" w="120" h="50" />
            </Screen>
          }
        />
        <Route
          path="/ldash2"
          element={
            <Screen image="/ldash2.png">
              <Button to="/ldashnoti" x="580" y="20" w="50" h="50" />
              <Button to="/lmenu" x="640" y="20" w="30" h="50" />
            </Screen>
          }
        />
        <Route
          path="/alogin1"
          element={
            <Screen image="/alogin1.png">
              <Button to="/adash1" x="355" y="495" w="260" h="70" />
              <Button to="/asignup1" x="440" y="580" w="110" h="20" />
              <Button to="/alogin2" x="170" y="180" w="355" h="70" />
              <Button to="/alogin2" x="170" y="280" w="360" h="60" />
            </Screen>
          }
        />
        <Route
          path="/alogin2"
          element={
            <Screen image="/alogin2.png">
              <Button to="/adash1" x="390" y="500" w="210" h="70" />
              <Button to="/asignup1" x="460" y="590" w="100" h="20" />
            </Screen>
          }
        />
        <Route
          path="/asignup1"
          element={
            <Screen image="/asignup1.png">
              <Button to="/asignup2" x="250" y="230" w="400" h="55" />
              <Button to="/asignup2" x="250" y="310" w="400" h="55" />
              <Button to="/asignup2" x="250" y="385" w="400" h="55" />
              <Button to="/adash1" x="345" y="460" w="210" h="90" />
            </Screen>
          }
        />
        <Route
          path="/asignup2"
          element={
            <Screen image="/asignup2.png">
              <Button to="/asignup3" x="80" y="100" w="120" h="15" />
              <Button to="/asignup4" x="110" y="150" w="80" h="30" />
            </Screen>
          }
        />
        <Route
          path="/asignup3"
          element={
            <Screen image="/asignup3.png">
              <Button to="/asignup4" x="350" y="490" w="210" h="90" />
            </Screen>
          }
        />
        <Route
          path="/asignup4"
          element={
            <Screen image="/asignup4.png">
              <Button to="/adash1" x="400" y="570" w="235" h="90" />
            </Screen>
          }
        />
        <Route
          path="/adash1"
          element={
            <Screen image="/adash1.png">
              <Button to="/adashnoti" x="640" y="20" w="50" h="50" />
              <Button to="/amenu" x="700" y="20" w="30" h="50" />
            </Screen>
          }
        />
        <Route
          path="/adashnoti"
          element={
            <Screen image="/adashnoti.png">
              <Button to="/adash1" x="670" y="20" w="50" h="50" />
            </Screen>
          }
        />
        <Route
          path="/amenu"
          element={
            <Screen image="/amenu.png">
              <Button to="/" x="650" y="165" w="130" h="30" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
