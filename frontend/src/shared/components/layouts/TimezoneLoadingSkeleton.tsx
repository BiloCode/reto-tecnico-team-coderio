import Skeleton from 'react-loading-skeleton';

const skeletonQuantity = new Array(9).fill("");

const TimezoneLoadingSkeleton = () => (
  <>
    {
      skeletonQuantity.map((_,i) => 
        <Skeleton 
          key={i}
          width="100%"
          height={160} /> 
      )
    }
  </>
);

export default TimezoneLoadingSkeleton;