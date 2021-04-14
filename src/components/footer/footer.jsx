
let styles = {
  footerMain: {
    height: "75px",
    gridColumn: "1 / span 4",
    gridRow: "3",
    backgroundColor: "#414f6b",
    display: "grid",
    gridTemplateColumns: "25% 25% 25% 25%",
  },
  footerContent: {
    gridColumn: "2 / span 2",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: "#63769d",
    fontSize: "12px",
    fontFamily: "Lato",
    fontStyle: "italic",
  },
  footerLogo: {
    background: 'url("/images/LogoFooter.png")',
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    width: "170px",
    height: "43px",
  },
};

export default function FooterCopy() {
return (
  <div style={styles.footerMain}>
    <div style={styles.footerContent}>
      <div style={styles.footerLogo}></div>
      <div>COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
    </div>
  </div>
);
}