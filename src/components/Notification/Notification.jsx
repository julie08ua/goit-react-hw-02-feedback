import PropTypes from 'prop-types';
import { NotificationWrap } from './Notification.styled';

export const Notification = ({ message }) => <NotificationWrap>{message}</NotificationWrap>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;