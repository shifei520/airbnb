import { memo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { DetailPricturesWrapper } from './style';
import PictureBrowser from '@/components/picture-browser';

const DetailPictures = memo(() => {
	/** redux获取数据 */
	const { detailInfo } = useSelector((state) => state.detail, shallowEqual);

	const [showBrowser, setShowBrowser] = useState(false);

	return (
		<DetailPricturesWrapper>
			<div className="pictures">
				<div className="left">
					<div className="item">
						<img src={detailInfo?.picture_urls?.[0]} alt="" />
						<div className="cover" />
					</div>
				</div>
				<div className="right">
					{detailInfo?.picture_urls?.slice(1, 5).map((item) => {
						return (
							<div className="item" key={item}>
								<img src={item} alt="" />
								<div className="cover" />
							</div>
						);
					})}
				</div>
			</div>
			<div className="show-btn" onClick={(e) => setShowBrowser(true)}>
				显示照片
			</div>
			{showBrowser && (
				<PictureBrowser
					pictureUrls={detailInfo.picture_urls}
					closeClick={(e) => setShowBrowser(false)}
				/>
			)}
		</DetailPricturesWrapper>
	);
});

export default DetailPictures;
