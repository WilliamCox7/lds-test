// add custom css stylesheet
const css = `

  header.LDSORG #PFprefBox li.topItem[active]:after {
    display: none;
  }

  header.LDSORG #PFtileIcon:hover {
    background-color: var(--grey3);
  }

  .search-move-right {
    right: 52px !important;
  }

  #PFnewLogInWrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    background: gainsboro;
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  #PFtileIcon {
    background-size: 24px 24px;
    background-position: 50%;
    height: 32px;
    width: 32px;
    padding: 4px;
    position: absolute;
    right: 18px;
    top: 4px;
    border-radius: 50%;
    cursor: pointer;
  }

  #PFtileOverlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  #PFtileMenu {
    padding: 1em;
    display: none;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 11px);
    right: 8px;
    border: 1px solid #e0e2e2;
    border: 1px solid var(--grey5);
    border-radius: 2px;
    background: #fff;
    background: var(--white);
    box-shadow: 0 2px 4px 0 #a9adad;
    box-shadow: 0 2px 4px 0 var(--grey20);
    font-size: 14px;
    font-size: var(--headerFontSize14);
    cursor: default;
    text-align: left;
  }

  @media(max-width: 600px) {
    #PFtileMenu {
      width: 100vw;
      top: calc(100% + 4px);
      right: -18px;
    }
  }

  #PFtileMenuHeading {
    padding: 10px;
    border-bottom: solid 1px #d0d3d3;
    font-weight: bold;
  }

  #PFtileMenuWrapper {
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  #PFallToolsWrapper {
    display: flex;
    justify-content: center;
  }

  #PFallToolsWrapper a {
    width: 100%;
  }

  .toolsAndSupportTile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;
    height: 100px;
    align-items: center;
    margin: 8px;
    cursor: pointer;
  }

  .toolsAndSupportTile span {
    text-align: center;
    height: 38px;
    color: #0f9abd;
    margin-top: 5px;
  }

`;

let style = document.createElement('style');
if (style.styleSheet) style.styleSheet.cssText = css;
else style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);

// svg strings
const tileIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
    <path d="M0 0h24v24H0z" fill="none"></path>
  </svg>
`;

const donationsIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="33.452" height="41.376" viewBox="0 0 33.452 41.376">
    <g id="Group_2" data-name="Group 2" transform="translate(1478.64 -347.434)">
      <path id="Path_1" data-name="Path 1" d="M-1437.2,452.23h-14.94v-17.3h32.452v17.3h-9.285" transform="translate(-26 -87)" fill="none" stroke="#ffd217" stroke-width="1"/>
      <path id="Path_2" data-name="Path 2" d="M-1452.14,434.934l3.519,4.032h25.477l1.784-1.823" transform="translate(-26 -87)" fill="none" stroke="#ffd217" stroke-width="1"/>
      <path id="Path_3" data-name="Path 3" d="M-1435.686,456.08l2.058-2.535V445.67s1.19-1.559,2.254-1.559,2,1.559,2,1.559v7.874a12.7,12.7,0,0,1,1.277,3.676,23.482,23.482,0,0,1,.053,3.727l-.053.454-1.277,3.811h-11.114l-4.089-9.133,1.75-4.093" transform="translate(-26 -87)" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_4" data-name="Path 4" d="M-1442.379,465.213v10.1h14.719v-10.1Z" transform="translate(-26 -87)" fill="none" stroke="#2fbfd1" stroke-width="1"/>
    </g>
  </svg>
`;

const leaderAndClerkIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="39.644" height="44.126" viewBox="0 0 39.644 44.126">
  <g id="Group_1" data-name="Group 1" transform="translate(1366.44 -431.96)">
    <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(-1351 439)" fill="none" stroke="#ffd217" stroke-width="1">
      <circle cx="4" cy="4" r="4" stroke="none"/>
      <circle cx="4" cy="4" r="3.5" fill="none"/>
    </g>
    <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(-1364 450)" fill="none" stroke="#2fbfd1" stroke-width="1">
      <circle cx="3" cy="3" r="3" stroke="none"/>
      <circle cx="3" cy="3" r="2.5" fill="none"/>
    </g>
    <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(-1336 450)" fill="none" stroke="#2fbfd1" stroke-width="1">
      <circle cx="3" cy="3" r="3" stroke="none"/>
      <circle cx="3" cy="3" r="2.5" fill="none"/>
    </g>
    <path id="Path_5" data-name="Path 5" d="M-1353.217,453.7s-.063-2.854,1-3.571,2.983,0,2.983,0l2.343,1.531,2.042-1.531a3.389,3.389,0,0,1,2.772,0c1.151.717,1.181,3.571,1.181,3.571a12.493,12.493,0,0,1-6,1.83A14.631,14.631,0,0,1-1353.217,453.7Z" fill="none" stroke="#ffd217" stroke-width="1"/>
    <path id="Path_6" data-name="Path 6" d="M-1364,457.05s-1.2-.45-1.6,2.014a25.682,25.682,0,0,0,0,7.84c.4,2.212,1.6,1.008,1.6,1.008v7.674h5.1v-7.674s1.355,1.2,1.806-1.008a22.843,22.843,0,0,0,0-7.84c-.452-2.463-1.806-2.014-1.806-2.014" fill="none" stroke="#2fbfd1" stroke-width="1"/>
    <path id="Path_7" data-name="Path 7" d="M-1353.1,455.756s-.749,4.487,0,6.534,2.245-1.625,2.994,1.654,0,11.459,0,11.459h6.375s-.557-8.181,0-11.459,1.67.393,2.227-1.654,0-6.534,0-6.534" fill="none" stroke="#2fbfd1" stroke-width="1"/>
    <path id="Path_8" data-name="Path 8" d="M-1335.113,457.05s-1.224-.057-1.631,2.154a34.412,34.412,0,0,0,0,6.689l-1.75,2.317h3.382v6.615h4.579V468.21h2.793l-1.576-2.317a46.047,46.047,0,0,0,0-6.689c-.3-2.211-1.218-2.154-1.218-2.154" fill="none" stroke="#2fbfd1" stroke-width="1"/>
    <path id="Path_9" data-name="Path 9" d="M-1340.893,453.575c5.887-3.1,5.486-9.668,5.461-10.524s-1.5-10.573-11.508-10.59-11.662,9.41-11.676,10.59.211,5.045,1.565,6.543" fill="none" stroke="#2fbfd1" stroke-width="1"/>
  </g>
  </svg>
`;

const directoryAndMapIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="34.441" height="39.271" viewBox="0 0 34.441 39.271">
    <g id="Group_3" data-name="Group 3" transform="translate(1280.721 -520.809)">
      <path id="Path_11" data-name="Path 11" d="M-1246.78,544.715h-12.213s-.077-4.416-4.359-4.171a4.145,4.145,0,0,0-4.205,4.171" fill="none" stroke="#ffd217" stroke-width="1"/>
      <path id="Path_10" data-name="Path 10" d="M-1269.471,556.75v2.83h-10.75V521.309h33.441l-.006,23.914" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(-1267 532)" fill="none" stroke="#ffd217" stroke-width="1">
        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
      </g>
      <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(-1272 552)" fill="none" stroke="#2fbfd1" stroke-width="1">
        <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
        <circle cx="2.5" cy="2.5" r="2" fill="none"/>
      </g>
      <g id="Ellipse_7" data-name="Ellipse 7" transform="translate(-1260 552)" fill="none" stroke="#2fbfd1" stroke-width="1">
        <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
        <circle cx="2.5" cy="2.5" r="2" fill="none"/>
      </g>
      <path id="Path_12" data-name="Path 12" d="M-1246.78,549.059v10.272h-7.669" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_13" data-name="Path 13" d="M-1257.5,556.7v2.778h-8.5" fill="none" stroke="#2fbfd1" stroke-width="1"/>
    </g>
  </svg>
`;

const calendarIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="38.52" height="36.829" viewBox="0 0 38.52 36.829">
    <g id="Group_4" data-name="Group 4" transform="translate(1471.781 -702)">
      <path id="Path_14" data-name="Path 14" d="M-1471.281,712.378v25.951h37.251V715.493" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_15" data-name="Path 15" d="M-1471.281,708.406v-2.423h37.52V712.6h-37.52" fill="none" stroke="#b90063" stroke-width="1"/>
      <g id="Ellipse_8" data-name="Ellipse 8" transform="translate(-1465 702)" fill="#fff" stroke="#b90063" stroke-width="1">
        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
      </g>
      <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(-1447 702)" fill="#fff" stroke="#b90063" stroke-width="1">
        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
      </g>
      <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(-1451 717)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_2" data-name="Rectangle 2" transform="translate(-1446 717)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(-1441 717)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(-1466 722)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_5" data-name="Rectangle 5" transform="translate(-1461 722)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_6" data-name="Rectangle 6" transform="translate(-1456 722)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_7" data-name="Rectangle 7" transform="translate(-1451 722)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_8" data-name="Rectangle 8" transform="translate(-1446 722)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_9" data-name="Rectangle 9" transform="translate(-1441 722)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_10" data-name="Rectangle 10" transform="translate(-1466 727)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_11" data-name="Rectangle 11" transform="translate(-1461 727)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_12" data-name="Rectangle 12" transform="translate(-1456 727)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_13" data-name="Rectangle 13" transform="translate(-1451 727)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_14" data-name="Rectangle 14" transform="translate(-1446 727)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_15" data-name="Rectangle 15" transform="translate(-1441 727)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_16" data-name="Rectangle 16" transform="translate(-1466 732)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
      <g id="Rectangle_17" data-name="Rectangle 17" transform="translate(-1461 732)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="3" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="2" height="1" fill="none"/>
      </g>
    </g>
  </svg>
`;

const missionaryPortalIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="39.504" height="43.09" viewBox="0 0 39.504 43.09">
    <g id="Group_5" data-name="Group 5" transform="translate(1347.85 -919)">
      <path id="Path_16" data-name="Path 16" d="M-1326.1,922.387a31.359,31.359,0,0,1,10.489,4.675,26.1,26.1,0,0,1,6.767,8.477V947.22a16.765,16.765,0,0,1-5.321,8.744c-4.314,3.592-12.151,5.633-12.151,5.633a33.267,33.267,0,0,0,5.765-6.857,14.525,14.525,0,0,0,1.824-6.452V935.539a14.984,14.984,0,0,0-1.824-6.668A29.615,29.615,0,0,0-1326.1,922.387Z" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_17" data-name="Path 17" d="M-1308.845,935.336H-1323.5" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_18" data-name="Path 18" d="M-1308.845,948.539h-37.027" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_19" data-name="Path 19" d="M-1326.1,961.59h-3.865s-7.6-2.132-11.331-6.114a30.211,30.211,0,0,1-5.636-9.816" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_20" data-name="Path 20" d="M-1336.825,942.509s-.214,6.16,1.416,10.672,5.761,8.457,5.761,8.457" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <g id="Rectangle_18" data-name="Rectangle 18" transform="translate(-1333 941)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="2" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="1" height="1" fill="none"/>
      </g>
      <g id="Rectangle_19" data-name="Rectangle 19" transform="translate(-1329 941)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="2" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="1" height="1" fill="none"/>
      </g>
      <g id="Rectangle_20" data-name="Rectangle 20" transform="translate(-1325 941)" fill="#fff" stroke="#2fbfd1" stroke-width="1">
        <rect width="2" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="1" height="1" fill="none"/>
      </g>
      <g id="Rectangle_21" data-name="Rectangle 21" transform="translate(-1332 930)" fill="#fff" stroke="#ffd217" stroke-width="1">
        <rect width="2" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="1" height="1" fill="none"/>
      </g>
      <g id="Rectangle_22" data-name="Rectangle 22" transform="translate(-1342 937)" fill="#fff" stroke="#ffd217" stroke-width="1">
        <rect width="2" height="2" stroke="none"/>
        <rect x="0.5" y="0.5" width="1" height="1" fill="none"/>
      </g>
      <g id="Ellipse_10" data-name="Ellipse 10" transform="translate(-1345 925)" fill="none" stroke="#ffd217" stroke-width="1">
        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
      </g>
      <g id="Ellipse_11" data-name="Ellipse 11" transform="translate(-1335 919)" fill="none" stroke="#ffd217" stroke-width="1">
        <circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
        <circle cx="3.5" cy="3.5" r="3" fill="none"/>
      </g>
      <path id="Path_21" data-name="Path 21" d="M-1330.58,925l3.708,3.795v7h-9.875v6.74h-10.6V935.39l5.554-4.029" fill="none" stroke="#ffd217" stroke-width="1"/>
    </g>
  </svg>
`;

const findAChurchIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40.412" height="43.291" viewBox="0 0 40.412 43.291">
    <g id="Group_6" data-name="Group 6" transform="translate(1267.404 -1142.893)">
      <path id="Path_22" data-name="Path 22" d="M-1258.8,1170.425l-8.106,4.168v5.307h39.412v-5.307l-8.58-4.168v-2.546l-11.343-5.066-11.383,5.066Z" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_23" data-name="Path 23" d="M-1251.44,1164.694v-4.161h8.325v4.161" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_24" data-name="Path 24" d="M-1249.515,1160.533v-6.653h-2.267l4.351-9.787,4.618,9.787h-2.795v3.959" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_25" data-name="Path 25" d="M-1258.582,1179.9v-9.622" transform="translate(-0.198)" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <path id="Path_26" data-name="Path 26" d="M-1236.345,1179.9v-9.583" transform="translate(0.245)" fill="none" stroke="#2fbfd1" stroke-width="1"/>
      <g id="Ellipse_12" data-name="Ellipse 12" transform="translate(-1254 1169)" fill="#fff" stroke="#b90063" stroke-width="1">
        <circle cx="7" cy="7" r="7" stroke="none"/>
        <circle cx="7" cy="7" r="6.5" fill="none"/>
      </g>
      <path id="Path_27" data-name="Path 27" d="M-1237.968,1185.852l-4.582-5.157" fill="none" stroke="#b90063" stroke-width="1"/>
    </g>
  </svg>
`;

// main
handleAuthUpdates();
handleIconUpdates();
handleTileMenuCreation();
removeNavSections();

// main functions
function handleAuthUpdates() {
  let PFlogInWrapper = document.getElementById("PFlogInWrapper");
  let isLoggedIn = PFlogInWrapper.getAttribute("loggedin") === 'true';

  let newLogInWrapper = createNewButtons(isLoggedIn);
  PFlogInWrapper.parentNode.appendChild(newLogInWrapper);
  PFlogInWrapper.parentNode.removeChild(PFlogInWrapper);

  bumpButtonsDown();
}

function handleIconUpdates() {
  moveSearchToRight();
  addTileIcon();
}

function handleTileMenuCreation() {
  addTileMenu();
  addEventListenerForTileMenu();
}

function removeNavSections() {
  let navSections = document.getElementsByClassName("navSection");
  let myWard = navSections[1];
  let toolsAndSupport = navSections[2];
  myWard.parentNode.removeChild(myWard);
  toolsAndSupport.parentNode.removeChild(toolsAndSupport);
}

// functions
function createNewButtons(isLoggedIn) {
  let newLogInWrapper = document.createElement("DIV");
  newLogInWrapper.id = "PFnewLogInWrapper";

  let signInATag = createAuthATag('login');
  let signOutATag = createAuthATag('logout');
  
  if (isLoggedIn) signInATag.style.display = "none";
  else signOutATag.style.display = "none";

  newLogInWrapper.appendChild(signInATag);
  newLogInWrapper.appendChild(signOutATag);

  return newLogInWrapper;
}

function createAuthATag(type) {
  let url = `https://www.churchofjesuschrist.org/?lang=eng&mboxDisable=1&${type === 'login' ? 'signmein' : 'signmeout'}`;
  let tag = document.createElement("A");
  tag.onclick = () => window.location.replace(url);
  tag.onkeypress = () => { if (event.which === 13 || event.keyCode === 13) window.location.replace(url); };
  tag.id = type + "ButtonDisplay";
  tag.innerText = type === 'login' ? "Sign In" : "Sign Out";
  tag.tabIndex = "0";
  tag.style.cursor = "pointer";
  return tag;
}

function bumpButtonsDown() {
  let navSection = document.getElementsByClassName("navSection")[0];
  navSection.style.marginBottom = "25px";
}



function moveSearchToRight() {
  let PFsearchIcon = document.getElementById("PFsearchIcon");
  PFsearchIcon.classList.add("search-move-right");
}

function addTileIcon() {
  let newSpan = document.createElement("SPAN");
  newSpan.innerHTML = tileIcon;
  let overlay = createOverlay();
  newSpan.appendChild(overlay);
  newSpan.id = "PFtileIcon";
  newSpan.appendChild(addTileMenu());
  let PFnavContainer = document.getElementById("PFnavContainer");
  PFnavContainer.appendChild(newSpan);
}

function createOverlay() {
  let overlay = document.createElement("SPAN");
  overlay.id = "PFtileOverlay";
  overlay.onclick = (e) => {
    let PFtileMenu = document.getElementById("PFtileMenu");
    if (e.target.id === "PFtileOverlay" && PFtileMenu.style.display === "flex") {
      PFtileMenu.style.display = "none";
    } else {
      PFtileMenu.style.display = "flex";
    }
  }
  return overlay;
}



function addTileMenu() {
  let tileMenu = document.createElement("DIV");
  tileMenu.id = "PFtileMenu";

  let heading = createTileMenuHeading();
  tileMenu.appendChild(heading);

  let tileWrapper = createTileMenuWrapper();
  tileMenu.appendChild(tileWrapper);

  let allToolsWrapper = createTileMenuAllToolsWrapper();
  let allToolsButton = createTileMenuAllToolsButton();
  allToolsWrapper.appendChild(allToolsButton);

  tileMenu.appendChild(allToolsWrapper);

  return tileMenu;
}

function createTileMenuHeading() {
  let heading = document.createElement("DIV");
  heading.innerText = "Tools and Support";
  heading.id = "PFtileMenuHeading";
  return heading;
}

function createTileMenuWrapper() {
  let tileWrapper = document.createElement("DIV");
  tileWrapper.id = "PFtileMenuWrapper";

  createTile(donationsIcon, tileWrapper, "Donations", "/donations/#/donation/step1");
  createTile(leaderAndClerkIcon, tileWrapper, "Leader and Clerk", "/mls/mbr");
  createTile(directoryAndMapIcon, tileWrapper, "Directory and Map", "/directory");
  createTile(calendarIcon, tileWrapper, "Calendar", "/calendar");
  createTile(missionaryPortalIcon, tileWrapper, "Missionary Portal", "https://missionary.lds.org");
  createTile(findAChurchIcon, tileWrapper, "Find a Church", "/maps/meetinghouses");

  return tileWrapper;
}

function createTileMenuAllToolsWrapper() {
  let allToolsWrapper = document.createElement("DIV");
  allToolsWrapper.id = "PFallToolsWrapper";
  return allToolsWrapper;
}

function createTileMenuAllToolsButton() {
  let allToolsButton = document.createElement("A");
  allToolsButton.href = "https://www.lds.org/myaccount";
  allToolsButton.tabIndex = "0";
  allToolsButton.classList.add("button", "secondary-button", "wide");
  allToolsButton.innerText = "All Tools";
  return allToolsButton;
}

function createTile(icon, menu, text, link) {
  let iconElement = document.createElement("A");
  iconElement.href = link;
  iconElement.classList.add("toolsAndSupportTile");
  iconElement.innerHTML = icon;

  let textElement = createTileTextElement(text);
  iconElement.appendChild(textElement);
  menu.appendChild(iconElement);
}

function createTileTextElement(text) {
  let textElement = document.createElement("SPAN");
  textElement.innerText = text;
  return textElement;
}

function addEventListenerForTileMenu() {
  document.addEventListener("click", (e) => {
    if (!isTileMenu(e.target) && e.target.id !== "PFtileOverlay") {
      document.getElementById("PFtileMenu").style.display = "none";
    }
  });
}

function isTileMenu(node) {
  if (node.parentNode.id === "PFtileMenu") return true;
  else if (node.parentNode.id === "platform") return false;
  else isTileMenu(node.parentNode);
}