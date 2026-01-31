import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import { getLatestNotification } from "../utils/utils";

const notificationsList = [
  { id: 1, type: "urgent", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: notificationsList,
      courses: coursesList,
    };

    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    this.setState((prevState) => ({
      notifications: prevState.notifications.filter((n) => n.id !== id),
    }));
  }

  render() {
    return (
      <>
        <div className="root-notifications">
          <Notifications
            notifications={this.state.notifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
        </div>

        <Header />

        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>

        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>

        <Footer />
      </>
    );
  }
}

export default App;
