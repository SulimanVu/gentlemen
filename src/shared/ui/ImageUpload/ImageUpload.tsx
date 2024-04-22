import { FC, useRef, useState } from 'react';

import { Image, Flex } from 'antd';
import { Icon, Text } from 'gentlemen-ui-kit';

import placeholderImage from '@/shared/assets/images/PlaceholderProject.png';

import styles from './imageUpload.module.scss';

interface ImageUpload {
  img?: string;
  title?: string;
}

export const ImageUpload: FC<ImageUpload> = ({ img, title }) => {
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const [mouseMove, setMouseMove] = useState(false);

  const uploadButton = (
    <div className={styles.uploadPlaceholder}>
      <Flex vertical align="center" gap={16}>
        <div className={styles.iconBlock}>
          <Icon as="Photo" color="#fff" size={32} />
        </div>
        <Text color="white100" fontSize="large" fontWeight="bold">
          {title}
        </Text>
      </Flex>
    </div>
  );

  return (
    <div
      className={styles.imageBlock}
      onMouseMove={() => setMouseMove(true)}
      onMouseLeave={() => setMouseMove(false)}
    >
      <Image
        preview={false}
        width={img ? '100%' : 'auto'}
        height={400}
        src={img || placeholderImage}
        alt="building"
        className={styles.image}
      />
      {mouseMove && (
        <div className={styles.uploadBlock} onClick={() => uploadRef.current?.click()}>
          <div className={styles.uploadButton}>{uploadButton}</div>
          <input ref={uploadRef} type="file" accept="image/*" />
        </div>
      )}
    </div>
  );
};
