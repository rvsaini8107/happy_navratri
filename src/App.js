import InviteText from "./components/InviteText";
import Welcome from "./components/Welcome";
import diyaImage from "./image/diaya.gif"
import lastMaaImage from "./image/lastImg.gif"

function App() {
  const DiayaDiv = () => {
    return (
      <div className="diyaDiv">
        <img src={diyaImage} alt="" className="diyaImage" />
      </div>
    );
  };
  return (
    <div className="container">
      <div className="welcomepage">
        <p className="text-ShriGanesh text-center">॥ श्री गणेशाय नमः ॥</p>
        <h1 className="text-durgama text-center glow">दुर्गा पूजा महोत्सव - 2023</h1>
        <Welcome />
        <marquee>
        <div className="diyawalk">
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
          <DiayaDiv/>
        </div>
        </marquee>
        <InviteText />
        <p className="text-title-heading text-center colorWhite">
        -: कार्यक्रम स्थल :-
        </p>
        <div className="text-heading-like text-center">
        श्री बृजलाल बुद्धिया खेल परिसर
        </div>
        <p className="text-address text-center">
        बालिका विद्यालय के पास, रतननगर (चूरू) 
        </p>
        <p className="text-full-address text-center colorWhite ">
        में दूर्गा पूजा पूजा समारोह होना सुनिश्चित हुआ है। अत: आप सभी बन्धुओं व मात्शक्ति से सादर निवेदन है कि शक्ति उपासना के इस महापर्व पर आप सभी सादर आमंत्रित है।
        </p>
        <p className="timeTable text-center">
        महाआरती - सायं 7.15 बजे से 8:15 बजे तक विशेष - विभिन्न प्रतियोगिताएं एवं बाल नृत्य नाटिकायें

        </p>
        <p className="request-text text-center glow">
        निवेदक : दुर्गा पुजा समिति 2023 व समस्त ग्रामवासी, रतननगर / ठैलासर
        </p>
        <h3 className="announce-text text-center">
        रावण दहन व दशहरा उत्सव
        </h3>
        <p className="last-text text-center colorWhite">
        दिनांक: 24 अक्टुबर 2023, सायं 06.15 बजे से (स्थान: राजकीय सी. सै. विद्यालय का खेल मैदान)
        </p>
      </div>
      <marquee className="imglast" scrollamount="50">
        <div className="goooo">
        <div class=" grid">
            <DiayaDiv/>
            <div class="item1">H</div>
            <div class="item5">a</div>
            <div class="item3">p</div>
            <div class="item2">p</div>
            <div class="item3">y</div>
            <div class="item3"></div>
            <div class="item4">N</div>
            <div class="item5">a</div>
            <div class="item6">v</div>
            <div class="item7">r</div>
            <div class="item8">a</div>
            <div class="item9">t</div>
            <div class="item10">r</div>
            <div class="item7">i</div>
            <DiayaDiv/>
        </div>
        </div>
      </marquee>
    </div>
  );
}

export default App;
