// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { NavDropdown, Card, Carousel, Row, Col } from 'react-bootstrap';
// import '../App.css';

// const HomePage = () => {
//   const [events, setEvents] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const evnts = [
//         { id: 1, title: 'Soft Skills Training', date: '12 July 2023, 10:00am - 12:00pm', img: 'soft.jpg' },
//         { id: 2, title: 'Yoga Day', date: '14 July 2023, 03:00pm - 05:00pm', img: 'yoga.jpg' },
//         { id: 3, title: 'Another Event', date: '15 July 2023, 02:00pm - 04:00pm', img: 'another events.jpg' },
//       ];
//       setEvents(evnts);
//     };

//     fetchEvents();
//   }, []);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const chunkArray = (array, size) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//       result.push(array.slice(i, i + size));
//     }
//     return result;
//   };

//   const slides = chunkArray(events, 2);

//   const meetingRooms = [
//     { id: 1, title: 'Conference Room-1', img: 'Img.png' },
//     { id: 2, title: 'Conference Room-2', img: 'Img (1).png' },
//     { id: 3, title: 'Conference Room-3', img: 'img4.jpg' },
//     { id: 4, title: 'Meeting Room 4', img: 'image.jpg' }
//   ];

//   return (
//     <>
//       <header className="banner-container">
//         <img src="banner.png" alt="Banner" className="banner-image" />
//         <div className="welcome-card">
//           <p>Hello Sriram, Welcome to</p>
//           <NavDropdown title="Rattha Tek Meadows,Chennai" id="basic-nav-dropdown" className="location-dropdown">
//             <NavDropdown.Item>kanini-bangalore</NavDropdown.Item>
//             <NavDropdown.Item>kanini-coimbatore</NavDropdown.Item>
//           </NavDropdown>
//         </div>
//       </header>
//       <main className="container">
//         <div className="row">
//           <div className="col-md-7">
//             <section className="upcoming-card">
//               <h2>
//                 <img className="tick-image" src="tick-mark 1.png" alt="Tick Mark" />
//                 Nothing Upcoming!
//               </h2>
//               <p style={{ color: "grey" }}>Any upcoming bookings and guests will appear here</p>
//               <Link to="/bookroom" className="mx-2 text-decoration-none" style={{ fontWeight: "500", color: "#5162F6" }}>
//                 <img src="door.png" alt="Book a Room" />
//                 Book a Room &rarr;
//               </Link>
//               <Link to="/bookdesk" className="mx-2 text-decoration-none" style={{ fontWeight: "500", color: "#5162F6" }}>
//                 <img src="deskchair.png" alt="Book a Desk" />
//                 Book a Desk &rarr;
//               </Link>
//             </section>
//             <section className="meeting-rooms-section">
//               <h2>Meeting rooms available now</h2>
//               <Carousel nextIcon={<span className="carousel-control-next-icon custom-carousel-control" />} prevIcon={<span className="carousel-control-prev-icon custom-carousel-control" />} indicators={false}>
//                 {chunkArray(meetingRooms, 2).map((slide, slideIndex) => (
//                   <Carousel.Item key={slideIndex}>
//                     <Row className="carousel-row">
//                       {slide.map(room => (
//                         <Col key={room.id} xs={12} md={6} className="mb-4">
//                           <Card className="event-card">
//                             <Card.Img variant="top" src={room.img} alt={room.title} className="event-img" />
//                             <Card.Body>
//                               <Card.Title>{room.title}</Card.Title>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       ))}
//                     </Row>
//                   </Carousel.Item>
//                 ))}
//               </Carousel>
//             </section>
//             <section className="upcoming-events-section">
//               <h2>Upcoming events at Kanini, Chennai</h2>
//               <Carousel nextIcon={<span className="carousel-control-next-icon custom-carousel-control" />} prevIcon={<span className="carousel-control-prev-icon custom-carousel-control" />} indicators={false}>
//                 {slides.map((slide, slideIndex) => (
//                   <Carousel.Item key={slideIndex}>
//                     <Row className="carousel-row">
//                       {slide.map(event => (
//                         <Col key={event.id} xs={12} md={6} className="mb-4">
//                           <Card className="event-card">
//                             <Card.Img variant="top" src={event.img} alt={event.title} className="event-img" />
//                             <Card.Body>
//                               <Card.Title>{event.title}</Card.Title>
//                               <Card.Text>{event.date}</Card.Text>
//                               <button className="btn btn-primary" style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
//                             </Card.Body>
//                           </Card>
//                         </Col>
//                       ))}
//                     </Row>
//                   </Carousel.Item>
//                 ))}
//               </Carousel>
//             </section>
//           </div>
//           <div className="col-md-5">
//             <section className="events-card">
//               <h3>Events happening at Chennai today</h3>
//               <p style={{ color: "grey" }}><b>July 13</b> Family Day in Chennai Faculty<br />10am-6pm</p>
//               <button style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
//               <hr />
//               <p style={{ color: "grey" }}><b>July 13</b> Family Day in Chennai Faculty<br />10am-6pm</p>
//               <button style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
//             </section>
//             <section className="events-card1">
//               <h3>Notifications</h3>
//               <p style={{ color: "grey" }}><img src="Ellipse.png" alt="Notification Icon"></img> Added capacity in Kanini, Pune office<br />Hr Admin</p>
//               <button style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
//               <hr />
//             </section>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Card, Carousel, Row, Col } from 'react-bootstrap';
import '../App.css';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      const evnts = [
        { id: 1, title: 'Soft Skills Training', date: '12 July 2023, 10:00am - 12:00pm', img: 'soft.jpg' },
        { id: 2, title: 'Yoga Day', date: '14 July 2023, 03:00pm - 05:00pm', img: 'yoga.jpg' },
        { id: 3, title: 'Another Event', date: '15 July 2023, 02:00pm - 04:00pm', img: 'another events.jpg' },
      ];
      setEvents(evnts);
    };

    const fetchMeetingRooms = async () => {
      const rooms = [
        { id: 1, title: 'Spring 4Px', employees: 20, img: 'yoga.jpg' },
        { id: 2, title: 'Sunrise', employees: 20, img: 'yoga.jpg' },
        { id: 3, title: 'Sunset', employees: 20, img: 'yoga.jpg' },
        { id: 4, title: 'Ocean View', employees: 25, img: 'yoga.jpg' },
        { id: 5, title: 'Mountain Retreat', employees: 15, img: 'yoga.jpg' },
        { id: 6, title: 'City Lights', employees: 30, img: 'yoga.jpg' },
      ];
      setMeetingRooms(rooms);
    };

    fetchEvents();
    fetchMeetingRooms();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const eventSlides = chunkArray(events, 2);
  const meetingRoomSlides = chunkArray(meetingRooms, 2);

  return (
    <>
      <header className="banner-container">
        <img src="banner.png" alt="Banner" className="banner-image" />
        <div className="welcome-card">
          <p>Hello Sriram, Welcome to</p>
          <NavDropdown title="Rattha Tek Meadows, Chennai" id="basic-nav-dropdown" className="location-dropdown">
            <NavDropdown.Item>kanini-bangalore</NavDropdown.Item>
            <NavDropdown.Item>kanini-coimbatore</NavDropdown.Item>
          </NavDropdown>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-md-7">
            <section className="upcoming-card">
              <h2>
                <img className="tick-image" src="tick-mark 1.png" alt="Tick Mark" />
                Nothing Upcoming!
              </h2>
              <p style={{ color: "grey" }}>Any upcoming bookings and guests will appear here</p>
              <Link to="/bookroom" className="mx-2 text-decoration-none" style={{ fontWeight: "500", color: "#5162F6" }}>
                <img src="door.png" alt="Book a Room" />
                Book a Room &rarr;
              </Link>
              <Link to="/bookdesk" className="mx-2 text-decoration-none" style={{ fontWeight: "500", color: "#5162F6" }}>
                <img src="deskchair.png" alt="Book a Desk" />
                Book a Desk &rarr;
              </Link>
            </section>
            <section className="meeting-rooms-section">
              <h2>Meeting Rooms</h2>
              <Carousel nextIcon={<span className="carousel-control-next-icon custom-carousel-control" />} indicators={false}>
              {/* <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}> */}
                {meetingRoomSlides.map((slide, slideIndex) => (
                  <Carousel.Item key={slideIndex}>
                    <Row className="carousel-row">
                      {slide.map(room => (
                        <Col key={room.id} xs={12} md={6} className="mb-4">
                          <Card className="meeting-room-card">
                            <Card.Img variant="top" src={room.img} alt={room.title} className="meeting-room-img"/>
                            <Card.Body>
                              <Card.Subtitle className="mb-2 text-muted heading">Conference Room:</Card.Subtitle>
                              <Card.Title style={{ fontWeight: 'bold' }}>{room.title}</Card.Title>
                              <div className="icon-images">
                                <img src="Tv.png" alt="Small Icon 1" className="small-icon" />
                                <img src="emp.png" alt="Small Icon 2" className="small-icon" />
                                <img src="Whiteboard.png" alt="Small Icon 3" className="small-icon3" />
                              </div>
                              <button className="btn btn-primary" style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </section>
            <section className="upcoming-events-section">
              <h2>Upcoming Events at Kanini, Chennai</h2>
              <Carousel nextIcon={<span className="carousel-control-next-icon custom-carousel-control" />} prevIcon={<span className="carousel-control-prev-icon custom-carousel-control" />} indicators={false}>
                {eventSlides.map((slide, slideIndex) => (
                  <Carousel.Item key={slideIndex}>
                    <Row className="carousel-row">
                      {slide.map(event => (
                        <Col key={event.id} xs={12} md={6} className="mb-4">
                          <Card className="event-card">
                            <Card.Img variant="top" src={event.img} alt={event.title} className="event-img" />
                            <Card.Body>
                              <Card.Title>{event.title}</Card.Title>
                              <Card.Text>{event.date}</Card.Text>
                              <button className="btn btn-primary" style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </section>
          </div>
          <div className="col-md-5">
            <section className="events-card">
              <h3>Events happening at Chennai today</h3>
              <p style={{ color: "grey" }}><b>July 13</b> Family Day in Chennai Faculty<br />10am-6pm</p>
              <button className="btn btn-primary" style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
              <hr />
              <p style={{ color: "grey" }}><b>July 13</b> Family Day in Chennai Faculty<br />10am-6pm</p>
              <button className="btn btn-primary" style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
            </section>
            <section className="events-card1">
              <h3>Notifications</h3>
              <p style={{ color: "grey" }}><img src="Ellipse.png" alt="Notification Icon"></img> Added capacity in Kanini, Pune office<br />Hr Admin</p>
              <button className="btn btn-primary" style={{ backgroundColor: "white", color: "#5162f6" }}>View Details</button>
              <hr />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
