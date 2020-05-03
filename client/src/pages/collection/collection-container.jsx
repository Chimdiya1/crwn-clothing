import CollectionPage from '../collection/collection.component';
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(WithSpinner(CollectionPage))

export default CollectionPageContainer