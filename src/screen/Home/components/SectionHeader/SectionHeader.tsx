import React from 'react';
import Text from '../../../../components/base/text/Text';

type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({title, description}) => (
  <>
    <Text styles={{fontSize: 24, letterSpacing: 1, marginBottom: 8}}>
      {title}
    </Text>
    <Text>{description}</Text>
  </>
);

export default SectionHeader;
