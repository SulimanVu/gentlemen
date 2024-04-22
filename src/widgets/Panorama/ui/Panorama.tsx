import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import image from '../image/Photo.jpg'

export function Panorama() {
  return (
    <div className="Panorama">
      <ReactPhotoSphereViewer src={image} height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>
    </div>
  );
}
