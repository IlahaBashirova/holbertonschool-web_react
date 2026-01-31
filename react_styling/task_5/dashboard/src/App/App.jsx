import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';  // ✅ Ajout du HOC

// On importe les composants de base
import LoginBase from '../Login/Login';
import CourseListBase from '../CourseList/CourseList';

// On les enrobe avec le HOC
const Login = WithLogging(LoginBase);
const CourseList = WithLogging(CourseListBase);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static defaultProps = {
    logOut: () => {},
    isLoggedIn: false
  };

  static propTypes = {
    logOut: PropTypes.func,
    isLoggedIn: PropTypes.bool
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    const notificationsList = [
      { id: 1, type: 'urgent', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    const coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <div className="min-h-screen flex flex-col">
        <div className="root-notifications">
          <Notifications notifications={notificationsList} />
        </div>
    
        <Header />
    
        {/* Main content grows and pushes footer down */}
        <main className="flex-1">
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the School">
            {/* Long text for responsiveness task */}
            <p className="max-[520px]:text-base">
              ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique, asperiores architecto blanditiis fuga doloribus sit illum
              aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut
              magni dicta. Recusandae, quia dicta?
            </p>
          </BodySection>
        </main>
        
        <Footer />
      </div>
    );
  }
}
export default App;
