import { toast } from 'react-toastify';

type NotifyType = 'info' | 'success' | 'warning' | 'error' | 'default';

const notify = (message: string, type: NotifyType) => {
  toast(message, {
    position: 'top-right',
    type: type,
    theme: 'colored'
  });
}

export default notify;