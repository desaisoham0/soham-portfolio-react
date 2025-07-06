// Usage Examples for Pastel Color Palette

import React from 'react';
import Button from './components/Button';
import Card from './components/Card';

// Example 1: Buttons with different pastel variants
const ButtonExamples = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold gradient-text">Button Examples</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="warning">Warning Button</Button>
        <Button variant="accent">Accent Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>
  );
};

// Example 2: Cards with different pastel variants
const CardExamples = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold gradient-text">Card Examples</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card variant="default">
          <Card.Header>
            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              Default Card
            </h4>
          </Card.Header>
          <Card.Content>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              This is a default card with pastel borders and backgrounds.
            </p>
          </Card.Content>
        </Card>

        <Card variant="primary">
          <Card.Header>
            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              Primary Card
            </h4>
          </Card.Header>
          <Card.Content>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              This card uses the pastel blue color scheme.
            </p>
          </Card.Content>
        </Card>

        <Card variant="secondary">
          <Card.Header>
            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              Secondary Card
            </h4>
          </Card.Header>
          <Card.Content>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              This card uses the pastel pink color scheme.
            </p>
          </Card.Content>
        </Card>

        <Card variant="success">
          <Card.Header>
            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              Success Card
            </h4>
          </Card.Header>
          <Card.Content>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              This card uses the pastel green color scheme.
            </p>
          </Card.Content>
        </Card>

        <Card variant="warning">
          <Card.Header>
            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              Warning Card
            </h4>
          </Card.Header>
          <Card.Content>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              This card uses the pastel yellow color scheme.
            </p>
          </Card.Content>
        </Card>

        <Card variant="accent">
          <Card.Header>
            <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              Accent Card
            </h4>
          </Card.Header>
          <Card.Content>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              This card uses the pastel lavender color scheme.
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

// Example 3: Typography with pastel colors
const TypographyExamples = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold gradient-text">
        Typography Examples
      </h3>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold gradient-text">Gradient Heading</h1>
        <h2 className="text-3xl font-semibold text-text-primary-light dark:text-text-primary-dark">
          Primary Text
        </h2>
        <h3 className="text-2xl font-medium text-text-secondary-light dark:text-text-secondary-dark">
          Secondary Text
        </h3>
        <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
          Muted text for descriptions and less important content.
        </p>
        <div className="flex gap-2">
          <span className="text-pastelBlue-dark dark:text-pastelBlue">
            Blue accent
          </span>
          <span className="text-pastelPink-dark dark:text-pastelPink">
            Pink accent
          </span>
          <span className="text-pastelGreen-dark dark:text-pastelGreen">
            Green accent
          </span>
          <span className="text-pastelYellow-dark dark:text-pastelYellow">
            Yellow accent
          </span>
          <span className="text-pastelLavender-dark dark:text-pastelLavender">
            Lavender accent
          </span>
        </div>
      </div>
    </div>
  );
};

// Example 4: Complete usage example
const PastelExamples = () => {
  return (
    <div className="min-h-screen gradient-bg p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold gradient-text">
            Pastel Color Palette
          </h1>
          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark">
            Modern pastel colors that adapt beautifully to light and dark themes
          </p>
        </div>

        <ButtonExamples />
        <CardExamples />
        <TypographyExamples />
      </div>
    </div>
  );
};

export default PastelExamples;
