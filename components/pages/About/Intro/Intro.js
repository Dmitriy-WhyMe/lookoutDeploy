import Container from '../../../ui/Container/Container'
import BreadCrumbs from '../../../ui/BreadCrumbs/BreadCrumbs'
import NextImage from 'next/image'
import {mockData} from '../mockData'
import classes from './Intro.module.scss'

const Intro = () => {
	return (
		<section className={classes.Section}>
			<Container>
				{mockData?.crumbs?.length > 0 && <BreadCrumbs list={mockData.crumbs}/>}

				<div className={classes.Content}>
					<h2>{mockData.introSection.title}</h2>

					<div className={classes.Block}>
						{mockData?.introSection?.topText && <p>{mockData.introSection.topText}</p>}
						<div className={classes.Image}>
							<NextImage
								src={mockData.introSection.photo}
								alt=''
								quality={95}
								priority
							/>
                        </div>
					</div>

					<div className={classes.Row}>
						{mockData?.introSection?.subTitle && <h3>{mockData.introSection.subTitle}</h3>}
						<div className={classes.RowDop}>
							{mockData?.introSection?.oneText && <p>{mockData.introSection.oneText}</p>}
							{mockData?.introSection?.twoText && <p>{mockData.introSection.twoText}</p>}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Intro