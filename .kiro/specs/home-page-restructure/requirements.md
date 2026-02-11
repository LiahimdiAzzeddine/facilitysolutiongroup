# Requirements Document

## Introduction

This specification addresses the restructuring of the home page to eliminate content repetition between sections and improve the overall professionalism of the site. The current implementation has overlapping content between the CompanyOverview and Features sections, both mentioning FSG identity, services, and 24/7 availability. The restructuring will create clear differentiation: CompanyOverview for company identity, Services for technical offerings, and Features (renamed to "Nos Avantages") for competitive advantages and methodology.

## Glossary

- **Home_Page**: The main landing page of the FSG website
- **CompanyOverview_Section**: The section presenting company identity, expertise areas, and statistics
- **Services_Section**: The section displaying technical service offerings (CVC, Electricity, etc.)
- **Features_Section**: The section highlighting competitive advantages and methodology (to be renamed "Nos Avantages")
- **Content_Repetition**: Duplicate or overlapping information appearing in multiple sections
- **Component_Order**: The sequence in which sections appear on the home page

## Requirements

### Requirement 1: Eliminate Content Repetition

**User Story:** As a website visitor, I want each section to present unique information, so that I can efficiently understand FSG's offerings without encountering redundant content.

#### Acceptance Criteria

1. WHEN the CompanyOverview_Section is displayed, THEN the System SHALL present company identity, expertise areas, and geographic coverage without mentioning 24/7 availability or specific service methodologies
2. WHEN the Features_Section is displayed, THEN the System SHALL present competitive advantages and methodology without repeating company identity information from CompanyOverview_Section
3. WHEN comparing content across CompanyOverview_Section and Features_Section, THEN the System SHALL ensure no overlapping mentions of FSG identity, service availability, or general company descriptions
4. THE System SHALL maintain all existing content that is unique to each section

### Requirement 2: Restructure Features Section Identity

**User Story:** As a website visitor, I want the advantages section to clearly communicate FSG's competitive strengths, so that I can understand why I should choose FSG over competitors.

#### Acceptance Criteria

1. THE Features_Section SHALL be renamed to "Nos Avantages" in the component structure
2. WHEN the Features_Section header is displayed, THEN the System SHALL show "Nos Avantages Compétitifs" or "Pourquoi Choisir FSG" as the main title
3. WHEN the Features_Section subtitle is displayed, THEN the System SHALL show "Une Approche Professionnelle à Votre Service" instead of "Bénéficiez de l'Assistance Technique 24/7"
4. THE Features_Section SHALL maintain the four existing cards: Installation & Maintenance, Intervention d'Urgence, Conseils & Audit, and Engagement Qualité
5. WHEN Features_Section card content is displayed, THEN the System SHALL focus on competitive advantages and methodology rather than general company information

### Requirement 3: Preserve CompanyOverview Content

**User Story:** As a website visitor, I want to understand who FSG is and their core capabilities, so that I can quickly assess if they are the right partner for my needs.

#### Acceptance Criteria

1. THE CompanyOverview_Section SHALL maintain the current presentation text describing FSG's role and expertise
2. THE CompanyOverview_Section SHALL display all four statistics: 50+ Collaborateurs, 10+ Ans d'Expérience, 100% Maroc, and 24/7 Disponibilité
3. WHEN the CompanyOverview_Section is rendered, THEN the System SHALL preserve the existing layout with content on the left and statistics grid on the right
4. THE CompanyOverview_Section SHALL keep the "En savoir plus" call-to-action button linking to the about page

### Requirement 4: Maintain Component Order

**User Story:** As a website visitor, I want information presented in a logical flow, so that I can progressively understand FSG's identity, services, and advantages.

#### Acceptance Criteria

1. THE Home_Page SHALL display sections in this order: Hero, CompanyOverview, Services, Features, About, Clients
2. WHEN the Home_Page is rendered, THEN the System SHALL ensure Features_Section appears after Services_Section and before About_Section
3. THE System SHALL maintain the existing order for all other sections (Hero, CompanyOverview, Services, About, Clients)

### Requirement 5: Preserve Technical Implementation

**User Story:** As a developer, I want all existing functionality and styling preserved, so that the restructuring only affects content and naming without breaking the user experience.

#### Acceptance Criteria

1. THE System SHALL maintain all existing Framer Motion animations for all sections
2. THE System SHALL preserve all responsive design breakpoints and mobile layouts
3. THE System SHALL keep all existing icon components and gradient color schemes
4. THE System SHALL maintain all hover effects, transitions, and interactive behaviors
5. WHEN components are renamed or content is updated, THEN the System SHALL ensure no CSS class names or styling rules are broken

### Requirement 6: Update Component Naming

**User Story:** As a developer, I want component names to reflect their purpose, so that the codebase is maintainable and self-documenting.

#### Acceptance Criteria

1. WHERE the Features component is renamed to "Nos Avantages", THE System SHALL update the component file name to reflect the new purpose
2. WHEN the renamed component is imported in Home.jsx, THEN the System SHALL use the updated component name
3. THE System SHALL maintain backward compatibility by ensuring all references to the component are updated consistently
4. THE System SHALL preserve the component's export structure and props interface

### Requirement 7: Maintain Services Section Integrity

**User Story:** As a website visitor, I want to see technical service offerings clearly presented, so that I can understand what specific services FSG provides.

#### Acceptance Criteria

1. THE Services_Section SHALL remain unchanged in terms of content, layout, and functionality
2. THE Services_Section SHALL continue to display the four service cards: CVC, Électricité, Froid Industriel, and Courant Faible
3. THE Services_Section SHALL maintain all existing navigation links to the detailed services page
4. THE Services_Section SHALL preserve the section title "Un service global pour une efficacité maximale" and subtitle "Votre fidélité est la preuve de notre #Expertise"
