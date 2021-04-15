import "./mountains.css"

let styles = {
  mountain1MainDiv: {
    background: 'url("/images/mountain1.png")',
    backgroundSize: "cover",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "25% 25% 25% 25%",
    gridAutoRows: "50% 50%",
  },
  mountain2MainDiv: {
    background: 'url("/images/mountain2.png")',
    backgroundSize: "cover",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "25% 25% 25% 25%",
    gridAutoRows: "50% 50%",
  },
  
  mountainSchedule: {
    fontFamily: "Oswald",
    fontWeight: "bold",
    fontSize: "32px",
    color: "#414f6b",
  },
  mountainScheduleItems: {
    fontSize: "16px",
    fontFamily: "Lato",
    color: "rgb(0, 0, 0)",
    lineHeight: "1.5",
    paddingTop: "20px",
  },
  mountainScheduleItemsLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
};

export const Mountain1 = (
  <div style={styles.mountain1MainDiv} className="mountainsBack">
    <div className="mountainContent">
      <div style={styles.mountainSchedule}>SCHEDULE</div>
      <div style={styles.mountainScheduleItems}>
        <div style={styles.mountainScheduleItemsLine}>
          <div>25 Nov 2016</div>
          <div>Vestibulum viverra</div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div>28 Nov 2016</div>
          <div>Vestibulum viverra</div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div style={{ height: "12px" }}></div>
          <div style={{ height: "12px" }}></div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div>18 Dec 2016</div>
          <div>Vestibulum viverra</div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div style={{ height: "12px" }}></div>
          <div style={{ height: "12px" }}></div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div>7 Jan 2017</div>
          <div>Vestibulum viverra</div>
        </div>
      </div>
    </div>
  </div>
);

export const Mountain2 = (
  <div style={styles.mountain2MainDiv} className="mountainsBack">
    <div className="mountainContent">
      <div style={styles.mountainSchedule}>SCHEDULE</div>
      <div style={styles.mountainScheduleItems}>
        <div style={styles.mountainScheduleItemsLine}>
          <div>17 Nov 2016</div>
          <div>Vestibulum viverra</div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div style={{ height: "12px" }}></div>
          <div style={{ height: "12px" }}></div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div style={{ height: "12px" }}></div>
          <div style={{ height: "12px" }}></div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div>13 Dec 2016</div>
          <div>Vestibulum viverra</div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div>28 Dec 2016</div>
          <div>Vestibulum viverra</div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div style={{ height: "12px" }}></div>
          <div style={{ height: "12px" }}></div>
        </div>
        <div style={styles.mountainScheduleItemsLine}>
          <div>9 Feb 2017</div>
          <div>Vestibulum viverra</div>
        </div>
      </div>
    </div>
  </div>
);