import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from '../components/Button'


function ButtonPage() {

    return (
        <div>
            <div>
                <Button rounded outline secondary className="mb-5">
                    <GoBell />
                    Click me!!
                    </Button>
            </div>
            <div>
                <Button primary>
                    <GoCloudDownload />
                    Buy now!
                </Button>
            </div>
            <div>
                <Button success rounded outline>
                    <GoDatabase />
                    See deal!
                </Button>
            </div>
            <div>
                <Button warning>Hide ads!</Button>
            </div>
            <div>
                <Button danger rounded>Something!</Button>
            </div>
            
        </div>
    )
}

export default ButtonPage