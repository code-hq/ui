import STATUS from '@/models/status';

export default {

  /**
   * Is this store in an idle state i.e. it's not performing any asynchronous actions.
   *
   * @return {boolean}
   */
  isIdle: state => state.status === STATUS.IDLE,


  /**
   * Is this store in a loading state i.e. it's performing an asynchronous action.
   *
   * @return {boolean}
   */
  isLoading: state => state.status === STATUS.LOADING,


  /**
   * Has the store encountered an error.
   *
   * @return {boolean}
   */
  hasErrored: state => state.status === STATUS.ERROR,
};
