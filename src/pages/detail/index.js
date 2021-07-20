import React, { PureComponent } from 'react';
import styles from './detail.module.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store'

class Detail extends PureComponent {
  render() {
    return (
      <div className={styles.DetailWrapper}>
        <div className={styles.Header}>{this.props.title}</div>
        <div className={styles.Content} dangerouslySetInnerHTML={{__html: this.props.content}}></div>
      </div>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));