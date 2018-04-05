import { connect } from 'react-redux';
import { refreshNews } from '../actions'
import News from '../components/News'

const mapStateToProps = state => ({
  articles: state.news,
})

const mapDispatchToProps = dispatch => ({
  refresh: stories => dispatch(refreshNews(stories)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
