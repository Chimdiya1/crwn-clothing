import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { createStructuredSelector } from 'reselect'
import { selectisCollectionFetching } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: selectisCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
        WithSpinner
)(WithSpinner(CollectionsOverview))
    
export default CollectionsOverviewContainer